import React, { useState, useEffect } from 'react';
import { GameEvent, Resources } from '../types';
import styles from './EventDeck.module.css';

interface EventDeckProps {
    event: GameEvent | null;
    resources: Resources;
    onOptionSelected: (idx: number) => void;
    onIgnore: () => void;
}

export const EventDeck: React.FC<EventDeckProps> = ({ event, resources, onOptionSelected, onIgnore }) => {
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        if (event) setAnimating(true);
        const t = setTimeout(() => setAnimating(false), 500);
        return () => clearTimeout(t);
    }, [event]);

    if (!event) return <div className={styles.loading}>Planning the realm...</div>;

    const canAfford = (effects: any) => {
        if (!effects.resources) return true;
        for (const [key, value] of Object.entries(effects.resources)) {
            const cost = -(value as number);
            if (cost > 0 && (resources[key as keyof Resources] || 0) < cost) {
                return false;
            }
        }
        return true;
    };

    const isRevolt = event.id.includes('REV');

    return (
        <div className={`${styles.deck} ${animating ? styles.slideIn : ''}`}>
            <div className={styles.story}>
                <h2 className={styles.title}>{event.title}</h2>
                <p className={styles.description}>{event.description}</p>
                <span className={styles.category}>Faction: {event.category.toUpperCase()}</span>
            </div>

            <div className={styles.options}>
                {event.options.map((opt, idx) => {
                    const afford = canAfford(opt.effects);
                    return (
                        <button
                            key={idx}
                            className={styles.scrollButton}
                            onClick={() => onOptionSelected(idx)}
                            disabled={!afford}
                            style={{ opacity: afford ? 1 : 0.5, cursor: afford ? 'pointer' : 'not-allowed' }}
                        >
                            <div className={styles.scrollText}>
                                {opt.text}
                                {!afford && <div style={{ color: 'red', fontSize: '10px' }}>(Insufficient Resources)</div>}
                            </div>
                        </button>
                    );
                })}
            </div>

            {!isRevolt && event.options.some(opt => canAfford(opt.effects)) ? null : !isRevolt && (
                <div className={styles.ignoreSection}>
                    <button className={styles.ignoreButton} onClick={onIgnore}>
                        Ignore Request
                    </button>
                </div>
            )}
        </div>
    );
};
