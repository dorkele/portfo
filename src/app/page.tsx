import styles from "./page.module.css";
import CircularElement from "@/components/CircularElement/CircularElement";
import WorkModal from "@/components/WorkModal/WorkModal";
import Sidenav from "@/components/Sidenav/Sidenav";

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.work}>
                <CircularElement />
                <WorkModal />
            </section>
            <Sidenav />
        </main>
    );
}
