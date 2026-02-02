export type ResourceType = 'gold' | 'food' | 'wood' | 'iron' | 'soldiers' | 'gems';

export interface Resources {
    gold: number;
    food: number;
    wood: number;
    iron: number;
    soldiers: number;
    gems: number;
}

export type FactionId = 'noble' | 'peasant' | 'clergy' | 'merchant' | 'army' | 'shadow' | 'artisan';
// Note: "7 key factions" mentioned in design, but only specific ones listed in examples.
// Design lists: Bankers (Merchant?), Farmers (Peasant?), Lumberjacks (Peasant?), Blacksmiths (Peasant?), Soldiers (Army?), Assassin (Shadow?), Noble.
// Let's canonicalize them based on "Parent Templates":
// - Banker -> Merchant
// - Farmer/Lumberjack/Blacksmith -> Peasant (or distinct?)
// - Assassin -> Shadow
// - Noble -> Noble
// Let's assume standard generic factions for now:
// Noble, Peasant, Merchant, Army, Church (Clergy), Shadow, Artisan?
// The design says "7 key factions". Let's stick to a set that covers the templates.
// 1. Noble
// 2. Peasant
// 3. Merchant
// 4. Army
// 5. Clergy (often standard)
// 6. Shadow
// 7. Artisan (Blacksmiths/Lumberjacks?)

export interface Faction {
    id: FactionId;
    name: string;
    reputation: number; // 0-100
}

export interface Monarch {
    name: string;
    age: number;
    generation: number;
    traits: string[]; // e.g., "Midas", "Glutton"
    parents: string[]; // Template names
}

export interface GameState {
    currentTurn: number; // Months
    monarch: Monarch;
    resources: {
        stock: Resources;
        perMonth: Resources;
    };
    factions: Record<FactionId, Faction>;
    history: string[]; // Log entries
    isGameOver: boolean;
    unlockedEvents: string[]; // IDs of events added to deck
    trustFund: Resources; // Stashed resources for next run
    drawnEvents: string[]; // IDs of events already seen by this monarch
    inventory: string[]; // Unique items [e.g. 'dragons_egg']
    queuedEventId: string | null; // Next event to show (deterministic chains)
    soldierCost: { gold: number, food: number }; // Per soldier per month
    showMenu: boolean;
}

export interface EventOption {
    text: string;
    effects: {
        resources?: Partial<Resources>; // Immediate change
        perMonthMod?: Partial<Resources>; // Change in monthly production
        reputation?: Partial<Record<FactionId, number>>;
        nextEvent?: string; // ID of chained event (immediate)
        unlockEvents?: string[]; // Add to deck for future random selection
        gameOver?: boolean | string; // True or reason string
        trustFund?: Partial<Resources>; // Add to trust fund
        softReset?: boolean; // Trigger succession
        salaryMod?: { gold?: number, food?: number }; // Change per-soldier cost
        addItem?: string[];
        removeItem?: string[];
    };
}

export type ActionType =
    | { type: 'START_GAME' }
    | { type: 'NEXT_TURN' }
    | { type: 'HYDRATE', payload: GameState }
    | { type: 'APPLY_EVENT_EFFECTS', payload: EventOption['effects'] }
    | { type: 'GAME_OVER' }
    | { type: 'SHOW_MENU' }
    | { type: 'CLOSE_MENU' };

export interface GameEvent {
    id: string;
    title: string;
    description: string;
    category: FactionId | 'narrative' | 'system';
    weight: number;
    isLocked?: boolean; // If true, requires unlock
    requirements?: {
        minResource?: Partial<Resources>;
        minReputation?: Partial<Record<FactionId, number>>;
        maxReputation?: Partial<Record<FactionId, number>>;
        minTurn?: number;
        items?: string[]; // Required items in inventory
    };
    options: EventOption[];
}
