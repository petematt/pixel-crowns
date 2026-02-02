import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { GameState, Resources, FactionId } from '../types';
import { INITIAL_FACTIONS } from '../data/factions';
import {
    INITIAL_RESOURCES,
    INITIAL_PER_MONTH,
    PARENT_TEMPLATES,
    generateMonarch,
    applyTemplateBonuses
} from '../utils/gameLogic';

// --- Action Types ---
type Action =
    | { type: 'START_GAME' }
    | { type: 'NEXT_TURN' }
    | { type: 'HYDRATE', payload: GameState }
    | {
        type: 'APPLY_EVENT_EFFECTS', payload: {
            stockMod?: Partial<Resources>,
            repMod?: Partial<Record<FactionId, number>>,
            perMonthMod?: Partial<Resources>,
            unlockEvents?: string[],
            gameOver?: boolean | string,
            trustFund?: Partial<Resources>,
            softReset?: boolean,
            salaryMod?: { gold?: number, food?: number },
            eventId?: string,
            addItem?: string[],
            removeItem?: string[],
            nextEventId?: string | null
        }
    }
    | { type: 'GAME_OVER', payload: { reason: string } }
    | { type: 'SHOW_MENU' }
    | { type: 'CLOSE_MENU' };

// --- Initial State Wrapper ---
// We start undefined to force loading checks? Or just default.
const DEFAULT_STATE: GameState = {
    currentTurn: 0,
    monarch: { name: 'Loading', age: 0, generation: 0, traits: [], parents: [] },
    resources: { stock: { ...INITIAL_RESOURCES }, perMonth: { ...INITIAL_PER_MONTH } },
    factions: { ...INITIAL_FACTIONS },
    history: [],
    isGameOver: false,
    unlockedEvents: [],
    drawnEvents: [],
    inventory: [],
    queuedEventId: null,
    trustFund: { gold: 0, food: 0, wood: 0, iron: 0, soldiers: 0, gems: 0 },
    soldierCost: { gold: 0.5, food: 0.5 },
    showMenu: true
};

// --- Reducer ---
const gameReducer = (state: GameState, action: Action): GameState => {
    switch (action.type) {
        case 'HYDRATE': {
            const payload = action.payload;
            const resources = { ...payload.resources };

            // Migration: flow -> perMonth
            if (resources && !resources.perMonth && (resources as any).flow) {
                resources.perMonth = (resources as any).flow;
            }

            return {
                ...DEFAULT_STATE,
                ...payload,
                resources: resources as GameState['resources'],
                unlockedEvents: payload.unlockedEvents || [],
                trustFund: payload.trustFund || { ...DEFAULT_STATE.trustFund },
                soldierCost: payload.soldierCost || { gold: 0.5, food: 0.5 },
                showMenu: true // Always show menu on initial load if we want them to click Continue
            };
        }
        case 'START_GAME': {
            // 1. Pick 2 random templates
            const templates = Object.keys(PARENT_TEMPLATES);
            const p1 = templates[Math.floor(Math.random() * templates.length)];
            const p2 = templates[Math.floor(Math.random() * templates.length)];

            const generation = 1;
            const monarch = generateMonarch(p1, p2, generation);

            const newState: GameState = {
                ...DEFAULT_STATE,
                monarch,
                factions: JSON.parse(JSON.stringify(INITIAL_FACTIONS)), // Deep copy
                resources: { stock: { ...INITIAL_RESOURCES }, perMonth: { ...INITIAL_PER_MONTH } },
                isGameOver: false,
                currentTurn: 1,
                unlockedEvents: [],
                trustFund: state.trustFund || { gold: 0, food: 0, wood: 0, iron: 0, soldiers: 0, gems: 0 }, // Persist if exists (soft reset re-uses START_GAME?)
                soldierCost: { gold: 0.5, food: 0.5 },
                showMenu: false // Close menu when game actually starts
            };

            // Apply Template Bonuses
            applyTemplateBonuses(p1, newState.resources.stock, newState.resources.perMonth, newState.factions);
            applyTemplateBonuses(p2, newState.resources.stock, newState.resources.perMonth, newState.factions);

            // Base stats (if any) could be added here

            return newState;
        }

        case 'NEXT_TURN': {
            if (state.isGameOver) return state;

            const newState = { ...state, monarch: { ...state.monarch } };
            // Ensure resources is a deep copy
            newState.resources = {
                stock: { ...state.resources.stock },
                perMonth: { ...state.resources.perMonth }
            };

            newState.currentTurn += 1;
            newState.monarch.age += (1 / 12);

            // 1. Calculate PerMonth & Update Stock
            // User Request: No hidden modifiers. Flow is Flow.
            (Object.keys(newState.resources.perMonth) as (keyof Resources)[]).forEach(res => {
                const income = newState.resources.perMonth[res];
                newState.resources.stock[res] += income;
            });

            // 2. Upkeep
            // Soldier Upkeep configurable via soldierCost
            const soldierCount = newState.resources.stock.soldiers;
            // Floor costs? Or allow decimals? Using Math.floor for integers as previously done.
            // But salary is 0.5, so 1 soldier = 0.5 cost? 
            // Previous code: Math.floor(soldierCount * 0.5). Yes.
            const goldCost = Math.floor(soldierCount * newState.soldierCost.gold);
            const foodCost = Math.floor(soldierCount * newState.soldierCost.food);

            newState.resources.stock.gold = Math.max(0, newState.resources.stock.gold - goldCost);
            newState.resources.stock.food = Math.max(0, newState.resources.stock.food - foodCost);

            // Starvation check? "Food... preventing starvation."
            if (foodCost > newState.resources.stock.food && newState.resources.stock.food === 0) {
                // Penalty for starvation? Losing soldiers?
                // Simplification: Rep penalty or soldier death logic here
            }

            // 3. Aging / Death Check
            // > 60 years old -> increasing chance of death
            if (newState.monarch.age > 60) {
                const deathChance = (newState.monarch.age - 60) * 0.01; // 1% per year over 60?
                if (Math.random() < deathChance) {
                    // Natural Death
                    // Trigger Succession (Not implemented in this reducer logic yet, needs external orchestration or state flag)
                    // For now just logging
                    console.log("Monarch died of old age");
                }
            }

            return newState;
        }

        case 'APPLY_EVENT_EFFECTS': {
            const { stockMod, repMod, perMonthMod, unlockEvents, gameOver, trustFund, softReset, salaryMod, eventId, addItem, removeItem, nextEventId } = action.payload;            // The Action type DEFINITION in types.ts is NOT imported here? 
            // Wait, Action type is defined IN THIS FILE. I need to update it too. 
            // But I am using `multi_replace`. I should update Action type too.
            // I'll assume I update Action type in another chunk.

            if (softReset) {
                // Succession Logic: New Game but keep Trust Fund and maybe Traits?
                // For now, simple restart with Trust Fund.
                // We can return START_GAME logic but injected with current trust fund.
                // Or we can just set a flag?
                // Let's reuse START_GAME by calling it? We can't call invalid action.
                // We can recursive call? No.
                // We duplicate logic or separate `startGame(trustFund)` function.
                // For simplicity, let's just trigger Game Over with "Succession" reason?
                // User wants "Step down peacefully" -> Soft Reset.
                // I will treat it as a special state or trigger a re-init.
                // Implementation: Return state equivalent to START_GAME but with Trust Fund preserved.
                // ... Copy paste START_GAME logic seems verbose. 
                // Let's just set `isGameOver: true` with reason "SUCCESSION" and handle UI restart?
                // "It is time for your heir".
                // Let's try to handle it in-place.
                const templates = Object.keys(PARENT_TEMPLATES);
                const p1 = templates[Math.floor(Math.random() * templates.length)];
                const p2 = templates[Math.floor(Math.random() * templates.length)];
                const generation = state.monarch.generation + 1;
                const monarch = generateMonarch(p1, p2, generation);

                const nextState: GameState = {
                    ...DEFAULT_STATE,
                    monarch,
                    factions: JSON.parse(JSON.stringify(INITIAL_FACTIONS)),
                    resources: { stock: { ...INITIAL_RESOURCES }, perMonth: { ...INITIAL_PER_MONTH } },
                    unlockedEvents: [], // Reset deck? Or keep? Usually reset.
                    drawnEvents: [], // Reset drawn events for new monarch
                    inventory: [], // Reset inventory for new monarch
                    trustFund: { ...state.trustFund }, // Keep trust fund
                    currentTurn: 1,
                    isGameOver: false
                };
                // Apply Trust Fund to Stock
                (Object.keys(nextState.trustFund) as (keyof Resources)[]).forEach(k => {
                    nextState.resources.stock[k] += nextState.trustFund[k];
                });
                // Reset Trust Fund? Or keep adding? Probably empty it into stock.
                nextState.trustFund = { gold: 0, food: 0, wood: 0, iron: 0, soldiers: 0, gems: 0 };

                // Apply Template Bonuses
                applyTemplateBonuses(p1, nextState.resources.stock, nextState.resources.perMonth, nextState.factions);
                applyTemplateBonuses(p2, nextState.resources.stock, nextState.resources.perMonth, nextState.factions);

                return nextState;
            }

            const newState = { ...state };
            // Deep copy resources to avoid mutation
            newState.resources = {
                stock: { ...state.resources.stock },
                perMonth: { ...state.resources.perMonth }
            };
            // Deep copy factions if reputation changes
            newState.factions = { ...state.factions };
            Object.keys(newState.factions).forEach(fid => {
                newState.factions[fid as FactionId] = { ...state.factions[fid as FactionId] };
            });

            // Apply Stock
            if (stockMod) {
                (Object.keys(stockMod) as (keyof Resources)[]).forEach(res => {
                    newState.resources.stock[res] = Math.max(0, newState.resources.stock[res] + (stockMod[res] || 0));
                });
            }

            // Apply Per Month
            if (perMonthMod) {
                (Object.keys(perMonthMod) as (keyof Resources)[]).forEach(res => {
                    newState.resources.perMonth[res] = Math.max(0, newState.resources.perMonth[res] + (perMonthMod[res] || 0));
                });
            }

            // Apply Reputation
            if (repMod) {
                (Object.keys(repMod) as FactionId[]).forEach(fid => {
                    // Check if faction exists (in case of 'narrative' categories mapped weirdly, but effects use FactionId)
                    if (newState.factions[fid]) {
                        const current = newState.factions[fid].reputation;
                        const val = repMod[fid] || 0;
                        newState.factions[fid].reputation = Math.max(0, Math.min(100, current + val));
                    }
                });
            }

            // Unlock Events
            if (unlockEvents) {
                unlockEvents.forEach((eid: string) => {
                    if (!newState.unlockedEvents.includes(eid)) {
                        newState.unlockedEvents.push(eid);
                    }
                });
            }

            // Trust Fund
            if (trustFund) {
                (Object.keys(trustFund) as (keyof Resources)[]).forEach(res => {
                    newState.trustFund[res] += (trustFund[res] || 0);
                });
            }

            // Salary Mod
            if (salaryMod) {
                if (salaryMod.gold !== undefined) newState.soldierCost.gold += salaryMod.gold;
                if (salaryMod.food !== undefined) newState.soldierCost.food += salaryMod.food;
            }

            // Event tracking
            if (eventId && !newState.drawnEvents.includes(eventId)) {
                newState.drawnEvents = [...newState.drawnEvents, eventId];
            }

            // Inventory Updates
            if (addItem) {
                addItem.forEach(item => {
                    if (!newState.inventory.includes(item)) {
                        newState.inventory = [...newState.inventory, item];
                    }
                });
            }
            if (removeItem) {
                newState.inventory = newState.inventory.filter(item => !removeItem.includes(item));
            }

            // Queued Event
            newState.queuedEventId = nextEventId !== undefined ? nextEventId : null;

            // Game Over
            if (gameOver) {
                newState.isGameOver = true;
            }

            return newState;
        }

        case 'GAME_OVER':
            return { ...state, isGameOver: true };

        case 'SHOW_MENU':
            return { ...state, showMenu: true };

        case 'CLOSE_MENU':
            return { ...state, showMenu: false };

        default:
            return state;
    }
};

// --- Context ---
interface GameContextType {
    state: GameState;
    dispatch: React.Dispatch<Action>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, DEFAULT_STATE);

    // Persistence (Basic)
    useEffect(() => {
        const saved = localStorage.getItem('monarchs_legacy_save');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (parsed.currentTurn > 0) {
                    dispatch({ type: 'HYDRATE', payload: parsed });
                } else {
                    dispatch({ type: 'START_GAME' });
                }
            } catch (e) {
                dispatch({ type: 'START_GAME' });
            }
        } else {
            // Start at main menu (DEFAULT_STATE has showMenu: true and currentTurn: 0)
        }
    }, []);

    useEffect(() => {
        if (state.currentTurn > 0) {
            localStorage.setItem('monarchs_legacy_save', JSON.stringify(state));
        }
    }, [state]);

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) throw new Error('useGame must be used within GameProvider');
    return context;
};
