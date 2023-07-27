import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.sky}>
            <div id="cloud-circle" className={styles.cloudCircle1}></div>
            <svg width="0" height="0">
                <filter id="filter1">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency=".02"
                        numOctaves="7"
                    />
                    <feDisplacementMap in="SourceGraphic" scale="180" />
                </filter>
            </svg>
            <div className={styles.circle}></div>
            <div id="cloud-circle" className={styles.cloudCircle}></div>
            <svg width="0" height="0">
                <filter id="filter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency=".01"
                        numOctaves="10"
                    />
                    <feDisplacementMap in="SourceGraphic" scale="180" />
                </filter>
            </svg>
        </main>
    );
}
