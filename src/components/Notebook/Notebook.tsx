"use client";

import styles from "./Notebook.module.css";
import Link from "next/link";

export default function Notebook() {
    return (
        <Link href="/projects" className={styles.notebook}>
            <div className={styles.belonging}>
                <div className={styles.linesContainer}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
                <h4 className={styles.title}>Projects</h4>
            </div>
        </Link>
    );
}
