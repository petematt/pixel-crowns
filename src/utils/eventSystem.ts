import { GameState, GameEvent, Resources, FactionId } from '../types';
import { EVENTS } from '../data/events';
import { shuffleArray } from './random';

function isEventValid(event: GameEvent, state: GameState): boolean {
    // 1. Locked Check
    if (event.isLocked && !(state.unlockedEvents || []).includes(event.id)) {
        return false;
    }

    // 2. Exhaustion Check (Non-rebellion events only)
    if (!event.id.includes('REV') && (state.drawnEvents || []).includes(event.id)) {
        return false;
    }

    if (!event.requirements) return true;
    const req = event.requirements;

    // 2. Turn Check
    if (req.minTurn && state.currentTurn < req.minTurn) return false;

    // 3. Resource Check
    if (req.minResource) {
        for (const [res, amount] of Object.entries(req.minResource)) {
            // Check stock
            if ((state.resources.stock[res as keyof Resources] || 0) < (amount || 0)) return false;
        }
    }

    // 4. Reputation Check (Min)
    if (req.minReputation) {
        for (const [fid, amount] of Object.entries(req.minReputation)) {
            // Handle if faction implies a category or specific ID.
            // Events usually use valid FactionId.
            const fac = state.factions[fid as FactionId];
            if (!fac || fac.reputation < (amount || 0)) return false;
        }
    }

    // 5. Reputation Check (Max)
    if (req.maxReputation) {
        for (const [fid, amount] of Object.entries(req.maxReputation)) {
            const fac = state.factions[fid as FactionId];
            if (!fac || fac.reputation > (amount || 0)) return false;
        }
    }

    // 6. Item Check
    if (req.items) {
        for (const item of req.items) {
            if (!(state.inventory || []).includes(item)) return false;
        }
    }

    return true;
}

export function selectNextEvent(state: GameState): GameEvent {
    // 0. Check for Queued Event (Deterministic Chains)
    if (state.queuedEventId) {
        const queued = EVENTS.find(e => e.id === state.queuedEventId);
        if (queued) return queued;
    }

    // 1. Check for Revolts (Prioritize)
    // Logic: find any faction with Rep < 20 (Rebellious)
    const rebelliousFactions = Object.values(state.factions).filter(f => f.reputation < 20);

    if (rebelliousFactions.length > 0) {
        const fId = rebelliousFactions[0].id;
        // Find a revolt event for this faction that is VALID
        const revolt = EVENTS.find(e =>
            e.id.includes('REV') &&
            e.category === fId &&
            isEventValid(e, state)
        );
        if (revolt) return revolt;
    }

    // 2. Normal Weighted Draw
    // Filter candidates whose requirements are met
    const candidates = EVENTS.filter(e => {
        if (e.id.includes('REV')) return false; // Skip revolts in normal draw

        const valid = isEventValid(e, state);
        if (!valid) {
            console.log(`[EventSystem] Skipped ${e.id} (${e.title}):`, e.requirements);
        }
        return valid;
    });

    if (candidates.length === 0) {
        // Fallback checks?
        // Return a default "Quiet Month" event?
        // Or just the first one ignoring requirements?
        // Let's return E001 or first available if possible. 
        // But if all are invalid, game might hang?
        // We assume at least one event is valid (e.g. low weight generic).
        // If not, return EVENTS[0] regardless of validity to avoid crash.
        return EVENTS[0];
    }

    const shuffledCandidates = shuffleArray([...candidates]);

    const totalWeight = shuffledCandidates.reduce((sum, e) => sum + e.weight, 0);
    let random = Math.random() * totalWeight;

    for (const event of shuffledCandidates) {
        random -= event.weight;
        if (random <= 0) return event;
    }

    return shuffledCandidates[0]; // Fallback
}
