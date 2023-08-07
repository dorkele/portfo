import CvPaper from "@/components/CvPaper/CvPaper";
import styles from "./page.module.css";
import Notebook from "@/components/Notebook/Notebook";
import Image from "next/image";
import stain from "../../public/images/coffee-stain.png";

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
            </div>
        </main>
    );
}
