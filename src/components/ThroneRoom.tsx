import React from 'react';
import { useGame } from '../context/GameContext';
import styles from './ThroneRoom.module.css';

export const ThroneRoom: React.FC = () => {
    const { state } = useGame();
    const { monarch, resources, factions } = state;

    const getIcon = (res: string) => {
        switch (res) {
            case 'gold': return '💰';
            case 'food': return '🍎';
            case 'wood': return '🌲';
            case 'iron': return '⛏️';
            case 'soldiers': return '🛡️';
            case 'gems': return '💎';
            default: return '';
        }
    };

    const [floatingTexts, setFloatingTexts] = React.useState<{ id: number, text: string, type: 'gain' | 'loss', res: string }[]>([]);
    const [tooltip, setTooltip] = React.useState<{ id: string, type: 'res' | 'fac' } | null>(null);
    const prevStockRef = React.useRef(resources.stock);
    const pressTimer = React.useRef<number | null>(null);

    // Floating Text Logic
    React.useEffect(() => {
        const changes: { id: number, text: string, type: 'gain' | 'loss', res: string }[] = [];
        let hasChanges = false;

        (Object.keys(resources.stock) as (keyof typeof resources.stock)[]).forEach(key => {
            const diff = Math.floor(resources.stock[key]) - Math.floor(prevStockRef.current[key]);
            if (diff !== 0) {
                hasChanges = true;
                // Only show if significant? Or all? User said "When a choice reduces a resource".
                // We show all changes for feedback.
                const sign = diff > 0 ? '+' : '';
                changes.push({
                    id: Date.now() + Math.random(),
                    text: `${sign}${diff}`,
                    type: diff > 0 ? 'gain' : 'loss',
                    res: key
                });
            }
        });

        if (hasChanges) {
            setFloatingTexts(prev => [...prev, ...changes]);
            prevStockRef.current = resources.stock;

            // Cleanup after animation
            setTimeout(() => {
                setFloatingTexts(prev => prev.filter(ft => !changes.includes(ft)));
            }, 1500);
        }
    }, [resources.stock]);

    const handlePressStart = (id: string, type: 'res' | 'fac') => {
        pressTimer.current = window.setTimeout(() => {
            setTooltip({ id, type });
        }, 500);
    };

    const handlePressEnd = () => {
        if (pressTimer.current) clearTimeout(pressTimer.current);
        setTooltip(null);
    };

    const getFactionStatus = (rep: number) => {
        if (rep >= 90) return "Exalted";
        if (rep >= 70) return "Loyal";
        if (rep >= 30) return "Neutral";
        if (rep >= 20) return "Unrest";
        return "Rebellious";
    };

    return (
        <div className={styles.room}>
            <img src="/assets/bg_throne.png" className={styles.bgImage} alt="Throne Room" />

            {/* Background Banners */}
            <div className={styles.banners}>
                {Object.values(factions).map(f => {
                    const isExalted = f.reputation >= 90;
                    const isRebellious = f.reputation < 20;
                    const borderColor = isExalted ? 'gold' : isRebellious ? 'darkred' : '#aaa';

                    return (
                        <div key={f.id} className={styles.banner}
                            style={{
                                background: `linear-gradient(to top,  rgba(255,255,255,0.3) ${f.reputation}%, rgba(0,0,0,0.5) ${f.reputation}%)`,
                                borderColor: borderColor,
                                borderWidth: isExalted || isRebellious ? '2px' : '1px'
                            }}
                            onPointerDown={() => handlePressStart(f.id, 'fac')}
                            onPointerUp={handlePressEnd}
                            onPointerLeave={handlePressEnd}
                        >
                            <span className={styles.bannerIcon}>{f.id[0].toUpperCase()}</span>

                            {/* Faction Tooltip */}
                            {tooltip?.id === f.id && tooltip.type === 'fac' && (
                                <div className={styles.tooltip} style={{ width: '120px', left: '0', transform: 'none', top: '110%', bottom: 'auto', zIndex: 100 }}>
                                    <div style={{ fontWeight: 'bold' }}>{f.name}</div>
                                    <div style={{ fontSize: '12px' }}>{getFactionStatus(f.reputation)} ({f.reputation}%)</div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Monarch */}
            <div className={styles.throne}>
                <div className={styles.kingContainer}>
                    <img src="/assets/king_adult.png" className={styles.kingSprite} alt="Monarch" />
                    <div className={styles.age}>Age: {Math.floor(monarch.age)}</div>
                </div>
            </div>

            {/* Resources Overlay */}
            <div className={styles.resources}>
                {Object.keys(resources.stock).map((key) => {
                    const res = key as keyof typeof resources.stock;
                    let gross = (resources.perMonth && resources.perMonth[res]) || 0;
                    let upkeep = 0;

                    // Calculate Upkeep
                    // User Request: use state.soldierCost
                    // Actually state.soldierCost might not be in the destructured 'state' if types updated but we didn't check usage?
                    // It is in GameState.
                    if (res === 'gold') upkeep = Math.floor(resources.stock.soldiers * (state.soldierCost?.gold || 0.5));
                    if (res === 'food') upkeep = Math.floor(resources.stock.soldiers * (state.soldierCost?.food || 0.5));

                    const net = gross - upkeep;
                    const sign = net >= 0 ? '+' : '';
                    const color = net > 0 ? '#8f8' : net < 0 ? '#f88' : '#aaa';

                    const myFloating = floatingTexts.filter(ft => ft.res === res);

                    return (
                        <div key={res} className={styles.resItem}
                            onPointerDown={() => handlePressStart(res, 'res')}
                            onPointerUp={handlePressEnd}
                            onPointerLeave={handlePressEnd}
                        >
                            {/* Floating Numbers */}
                            <div className={styles.floatingContainer}>
                                {myFloating.map(ft => (
                                    <div key={ft.id} className={styles.floatingNumber}
                                        style={{ color: ft.type === 'gain' ? '#8f8' : 'red' }}>
                                        {ft.text}
                                    </div>
                                ))}
                            </div>

                            {/* Resource Tooltip */}
                            {tooltip?.id === res && tooltip.type === 'res' && (
                                <div className={styles.tooltip}>
                                    <div><strong>{getIcon(res)} {res.toUpperCase()}</strong></div>
                                    <div>Stock: {Math.floor(resources.stock[res])}</div>
                                    <div>Base: +{gross} / mo</div>
                                    {upkeep > 0 && <div>Upkeep: -{upkeep} / mo</div>}
                                    {(res === 'soldiers' || res === 'gold' || res === 'food') && resources.stock.soldiers > 0 && (
                                        <div style={{ fontSize: '10px', marginTop: '5px', color: '#ccc' }}>
                                            Salary: {state.soldierCost?.gold}g, {state.soldierCost?.food}f / unit
                                        </div>
                                    )}
                                </div>
                            )}

                            <div>
                                <span title={res.charAt(0).toUpperCase() + res.slice(1)}>
                                    {getIcon(res)}
                                </span> {Math.floor(resources.stock[res])}
                            </div>
                            <div className={styles.flow} style={{ color }}>
                                ({sign}{net} / mo)
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
