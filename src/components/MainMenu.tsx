import React, { useEffect, useState } from 'react';
import { useGame } from '../context/GameContext';
import styles from './MainMenu.module.css';

export const MainMenu: React.FC = () => {
    const { dispatch } = useGame();
    const [hasSave, setHasSave] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('monarchs_legacy_save');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (parsed.currentTurn > 0) {
                    setHasSave(true);
                }
            } catch (e) {
                setHasSave(false);
            }
        }
    }, []);

    const handleStart = () => {
        dispatch({ type: 'START_GAME' });
        dispatch({ type: 'CLOSE_MENU' });
    };

    const handleContinue = () => {
        dispatch({ type: 'CLOSE_MENU' });
    };

    const handleRestart = () => {
        if (window.confirm("Are you sure you want to erase your kingdom and start a new lineage?")) {
            localStorage.removeItem('monarchs_legacy_save');
            dispatch({ type: 'START_GAME' });
            dispatch({ type: 'CLOSE_MENU' });
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.overlay}>
                {/* Background Kingdom Image (Placeholder logic - styled base) */}
                <div className={styles.background} />

                <div className={styles.content}>
                    <div className={styles.logoContainer}>
                        <h1 className={styles.logo}>PIXEL CROWNS</h1>
                        <div className={styles.logoShadow}>PIXEL CROWNS</div>
                    </div>

                    <div className={styles.buttonContainer}>
                        {hasSave ? (
                            <>
                                <button className={styles.btn} onClick={handleContinue}>CONTINUE</button>
                                <button className={styles.btnSecondary} onClick={handleRestart}>RESTART LEGACY</button>
                            </>
                        ) : (
                            <button className={styles.btn} onClick={handleStart}>START LINEAGE</button>
                        )}
                    </div>
                </div>

                <div className={styles.footer}>
                    BUILD YOUR LEGACY, BUILD YOUR KINGDOM
                </div>
            </div>
        </div>
    );
};
