"use client";

import styles from "./CvPaper.module.css";
import Image from "next/image";
import sea4 from "../../../public/images/4.jpg";

export default function CvPaper() {
    return (
        <div className={styles.cvPaper}>
            <div className={styles.imageContainer}>
                <Image src={sea4} alt="test" />
            </div>
        </div>
    );
}
