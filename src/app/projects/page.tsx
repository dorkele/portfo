import styles from "./page.module.css";
import Image from "next/image";
import CardStack from "@/components/CardStack/CardStack";

export default function Projects() {
    return (
        <main className={styles.main}>
            <CardStack />
        </main>
    );
}
