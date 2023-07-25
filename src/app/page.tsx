"use client";

import Image from "next/image";
import styles from "./page.module.css";
import sea1 from "../../public/images/1.jpg";
import sea2 from "../../public/images/2.jpg";
import sea3 from "../../public/images/3.jpg";
import sea4 from "../../public/images/4.jpg";
import sea5 from "../../public/images/5.jpg";
import sea6 from "../../public/images/6.jpg";
import { animate, animationControls, motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
    const picsArr = [sea1, sea2, sea3, sea4, sea5, sea6];
    return (
        <main className={styles.main}>
            <section className={styles.work}>
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
                <motion.div
                    className={styles.projectModal}
                    animate={{ width: ["0%", "90%"] }}
                >
                    <h1>Test naslov</h1>
                    <div className={styles.aboutProject}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum eu felis at elit rutrum tempus ut a
                            ligula. Vivamus sodales lacus in turpis interdum,
                            eget bibendum elit porta. Aliquam vel neque dictum,
                            faucibus justo ac, vulputate sapien. Integer quis
                            hendrerit felis. Quisque sagittis lectus quis mauris
                            eleifend interdum. Duis nec ante sed felis
                            vestibulum rhoncus eget vitae est. Nulla sodales
                            enim non nisi fermentum, et pretium mi mattis.
                            Suspendisse sapien mi, malesuada sit amet lorem nec,
                            tristique suscipit urna. Maecenas vulputate enim sed
                            neque suscipit, vel cursus sapien maximus. Aliquam
                            lobortis lorem et semper placerat. Etiam hendrerit
                            sodales elementum. Pellentesque fringilla, est
                            dictum maximus rutrum, augue odio ullamcorper enim,
                            eget vehicula arcu odio et nisl. Vivamus purus
                            neque, scelerisque vel molestie at, convallis eget
                            mi. Pellentesque imperdiet egestas mauris, sed
                            pharetra justo eleifend in. Aenean mi turpis,
                            sollicitudin ut orci pharetra, auctor vulputate
                            massa. Suspendisse consectetur finibus lobortis.
                            Nullam vehicula orci nec nisl interdum, eget pretium
                            lectus rhoncus. Interdum et malesuada fames ac ante
                            ipsum primis in faucibus. Nunc pellentesque nunc nec
                            nisi dapibus molestie. Nullam rhoncus dui ut augue
                            egestas, in rhoncus urna vehicula. Mauris sodales
                            lobortis mi et ultricies. Vivamus in pellentesque
                            felis. Vivamus non cursus dui. Morbi vehicula ut
                            nisl sit amet porttitor. Praesent fringilla mauris
                            augue, id hendrerit nisi pellentesque ut. Sed ac
                            nulla at risus sollicitudin hendrerit eu id justo.
                            Fusce scelerisque eros ut odio euismod ornare.
                            Aliquam rutrum ullamcorper vehicula. Phasellus
                            lobortis sed ipsum ac ullamcorper.
                        </p>
                        <div className={styles.images}>
                            <Image src={sea1} alt="name" priority />
                            <Image src={sea2} alt="name" priority />
                            <Image src={sea4} alt="name" priority />
                        </div>
                    </div>
                </motion.div>
            </section>
            <section className={styles.sidenav}>
                <Link href="cvs">work</Link>
                <Link href="cvs">curriculum vitae</Link>
                <Link href="cvs">about this page</Link>
                <Link href="cvs">links</Link>
                <Link href="cvs">contact</Link>
            </section>
        </main>
    );
}
