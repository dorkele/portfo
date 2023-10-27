import Image from "next/image";
import styles from "./page.module.css";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import CV from "@/components/CV/CV";

export default function Home() {
    return (
        <main className={styles.main}>
            <About />
            <Projects />
            <CV />
            <Contact />
        </main>
    );
}
