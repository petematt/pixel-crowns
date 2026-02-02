import { Faction, FactionId } from '../types';

export const INITIAL_FACTIONS: Record<FactionId, Faction> = {
    noble: { id: 'noble', name: 'Nobility', reputation: 50 },
    peasant: { id: 'peasant', name: 'Peasantry', reputation: 50 },
    merchant: { id: 'merchant', name: 'Merchants', reputation: 50 },
    army: { id: 'army', name: 'Army', reputation: 50 },
    clergy: { id: 'clergy', name: 'Clergy', reputation: 50 },
    shadow: { id: 'shadow', name: 'The Shadows', reputation: 50 },
    artisan: { id: 'artisan', name: 'Artisans', reputation: 50 }
};
