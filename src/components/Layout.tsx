import React, { ReactNode } from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
    topSection: ReactNode;
    bottomSection: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ topSection, bottomSection }) => {
    return (
        <div className={styles.container}>
            <div className={styles.topSection}>
                {topSection}
            </div>
            <div className={styles.bottomSection}>
                {bottomSection}
            </div>
        </div>
    );
};
