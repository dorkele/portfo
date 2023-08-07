import CvPaper from "@/components/CvPaper/CvPaper";
import styles from "./page.module.css";
import Notebook from "@/components/Notebook/Notebook";
import Image from "next/image";
import stain from "../../public/images/coffee-stain.png";
import airplane from "../../public/images/airplane.png";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.work}>
                <Notebook />
                <CvPaper />
                <Image
                    src={stain}
                    alt="coffee stain"
                    className={styles.stain}
                />
                <Image
                    src={airplane}
                    alt="paper airplane"
                    className={styles.airplane}
                />
            </div>
        </main>
    );
}
