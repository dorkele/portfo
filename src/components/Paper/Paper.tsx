"use client";

import Image from "next/image";
import styles from "./Paper.module.css";
import Link from "next/link";

export default function Paper({ project }: any) {
    const linesArr = Array.from(Array(20).keys());

    return (
        <div className={styles.paper}>
            <div className={styles.redLine}></div>
            {linesArr.map((line, index) => {
                return <div className={styles.line} key={index}></div>;
            })}
            <div className={styles.textContainer}>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <p>{project.stack}</p>
                <p>{project.url}</p>
                <p>{project.github}</p>
                <Image
                    src={project.image}
                    alt={project.alt}
                    width={500}
                    height={300}
                />
            </div>
        </div>
    );
}
