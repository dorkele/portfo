"use client";

import styles from "./Notebook.module.css";

export default function Notebook() {
    return (
        <div className={styles.notebook}>
            <div className={styles.belonging}>
                <div className={styles.linesContainer}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
                <h4 className={styles.title}>Projects</h4>
            </div>
        </div>
    );
}
