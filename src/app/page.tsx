import Image from "next/image";
import styles from "./page.module.css";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";

export default function Home() {
    return (
        <main className={styles.main}>
            <About />
            <Projects />
            <div id="contact" className={styles.section}>
                contact
            </div>
            <div id="cv" className={styles.section}>
                Curriculum
            </div>
        </main>
    );
}
