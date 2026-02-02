import { useState, useEffect } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { Layout } from './components/Layout';
import { ThroneRoom } from './components/ThroneRoom';
import { EventDeck } from './components/EventDeck';
import { MainMenu } from './components/MainMenu';
import { selectNextEvent } from './utils/eventSystem';
import { GameEvent } from './types';

const Game = () => {
    const { state, dispatch } = useGame();
    const [activeEvent, setActiveEvent] = useState<GameEvent | null>(null);
    const [waitingForNextTurn, setWaitingForNextTurn] = useState<boolean>(false);

    // Initial Event Draw on Turn change? 
    // No, we want explicit "Next Turn" -> Tick -> Draw Event.

    // handleNextTurn removed as turns are automatic


    useEffect(() => {
        // When turn changes, select an event
        if (state.currentTurn > 0 && !waitingForNextTurn && !state.isGameOver) {
            const evt = selectNextEvent(state);
            setActiveEvent(evt);
        }
    }, [state.currentTurn, waitingForNextTurn, state.isGameOver]); // Be careful of loops

    const handleIgnore = () => {
        // Just move to next turn without effects
        // But we need to clear current event and unblock
        setActiveEvent(null);
        setWaitingForNextTurn(true);
        // Logic: 
        // 1. User sees event. 
        // 2. User clicks Ignore or Option.
        // 3. Effects applied (if option).
        // 4. Wait for next turn? 
        // Original logic: "The Month Ends" screen appeared. User clicks next.
        // User wants to REMOVE "The Month Ends" screen. "Every action is a month".
        // So hitting Ignore -> Immediately Next Turn -> New Event.

        // Let's implement immediate turn loop:
        dispatch({
            type: 'APPLY_EVENT_EFFECTS',
            payload: { eventId: activeEvent?.id }
        });
        dispatch({ type: 'NEXT_TURN' });
        setWaitingForNextTurn(false);
    };

    // Need to modify handleOptionSelect to also auto-advance?
    // User said: "Remove the 'the months ends' screen".
    // So after option select -> Next Turn immediately.

    const handleOptionSelect = (idx: number) => {
        if (!activeEvent) return;
        const option = activeEvent.options[idx];

        // Apply effects
        dispatch({
            type: 'APPLY_EVENT_EFFECTS',
            payload: {
                stockMod: option.effects.resources,
                repMod: option.effects.reputation,
                addItem: option.effects.addItem,
                removeItem: option.effects.removeItem,
                nextEventId: option.effects.nextEvent,
                unlockEvents: option.effects.unlockEvents,
                eventId: activeEvent.id
            }
        });

        // Loop immediately
        dispatch({ type: 'NEXT_TURN' });
        setActiveEvent(null);
        setWaitingForNextTurn(false);
    };

    // Game Over Screen
    if (state.isGameOver) {
        return (
            <div style={{ padding: 20, textAlign: 'center', color: 'white' }}>
                <h1>Game Over</h1>
                <p>The lineage ends here.</p>
                <button onClick={() => window.location.reload()}>Restart Legacy</button>
            </div>
        );
    }

    if (state.showMenu) {
        return <MainMenu />;
    }

    return (
        <Layout
            topSection={<ThroneRoom />}
            bottomSection={
                <EventDeck
                    event={activeEvent}
                    resources={state.resources.stock}
                    onOptionSelected={handleOptionSelect}
                    onIgnore={handleIgnore}
                />
            }
        />
    );
};

function App() {
    return (
        <GameProvider>
            <Game />
        </GameProvider>
    )
}

export default App
