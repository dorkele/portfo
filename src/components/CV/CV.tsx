"use client";
import styles from "./CV.module.css";
import Image from "next/image";
import rainCloud from "../../../public/rain-clouds-png-273.png";
import vibe from "../../../public/images/vibe.JPG";
import experience from "../../../CV.json";
import { useState } from "react";

const CV = () => {
    const [activeExp, setActiveExp] = useState(0);
    return (
        <section className={styles.CV} id="cv">
            <h2 className={`h2 text-outline ${styles.title}`}>
                {experience[activeExp].title}
            </h2>
            {/* <Image src={vibe} alt="project" className={styles.backgroundImg} /> */}
            <div className={styles.timelineContainer}>
                <div className={styles.endDot}></div>
                {/* <div className={styles.timeline}></div> */}
                {experience.map((exp, index) => {
                    return (
                        <div
                            className={`${styles.experienceDot} ${
                                index === activeExp ? styles.activeDot : ""
                            }`}
                            key={index}
                            onClick={() => setActiveExp(index)}
                        ></div>
                    );
                })}
                <div className={styles.endDot}></div>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.paragraph}>{experience[activeExp].text}</p>
            </div>
        </section>
    );
};

export default CV;
