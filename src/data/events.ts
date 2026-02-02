import { GameEvent } from '../types';
import { peasantEvents } from './events/peasants';
import { nobleEvents } from './events/nobles';
import { merchantEvents } from './events/merchants';
import { artisanEvents } from './events/artisans';
import { shadowEvents } from './events/shadows';
import { narrativeEvents } from './events/narrative';
import { systemEvents } from './events/system';
import { chainEvents } from './events/chains';
import { revoltEvents } from './events/revolts';

export const EVENTS: GameEvent[] = [
    ...peasantEvents,
    ...nobleEvents,
    ...merchantEvents,
    ...artisanEvents,
    ...shadowEvents,
    ...narrativeEvents,
    ...systemEvents,
    ...chainEvents,
    ...revoltEvents
];
