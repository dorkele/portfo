import Image from "next/image";
import styles from "./page.module.css";
import About from "@/components/About/About";

export default function Home() {
    return (
        <main className={styles.main}>
            <About />
            <div id="contact" className={styles.section}>
                contact
            </div>
            <div id="cv" className={styles.section}>
                Curriculum
            </div>
            <div id="projects" className={styles.section}>
                projects
            </div>
        </main>
    );
}
