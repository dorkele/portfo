import Image from "next/image";
import styles from "./page.module.css";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Home() {
    return (
        <main className={styles.main}>
            <About />
            <Projects />
            <Contact />
            <div id="cv" className={styles.section}>
                Curriculum
            </div>
        </main>
    );
}
