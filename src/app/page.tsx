"use client";

import Image from "next/image";
import styles from "./page.module.css";
import sea1 from "../../public/images/1.jpg";
import sea2 from "../../public/images/2.jpg";
import sea3 from "../../public/images/3.jpg";
import sea4 from "../../public/images/4.jpg";
import sea5 from "../../public/images/5.jpg";
import sea6 from "../../public/images/6.jpg";
import { motion } from "framer-motion";

export default function Home() {
    const picsArr = [sea1, sea2, sea3, sea4, sea5, sea6];
    return (
        <main className={styles.main}>
            <motion.div
                className={styles.circle}
                animate={{ rotate: [0, 360] }}
                transition={{
                    duration: picsArr.length * 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {picsArr.map((pic, index) => {
                    const angle = 360 / picsArr.length;
                    return (
                        <Image
                            key={index}
                            src={pic}
                            alt="name"
                            priority
                            style={{
                                transform: `rotate(calc(${
                                    angle * index
                                } * 1deg)) translate(calc(70vh / 2)) rotate(calc(${
                                    angle * index
                                }  * -1deg))`,
                            }}
                        />
                    );
                })}
            </motion.div>
            <section className={styles.work}></section>
        </main>
    );
}
