"use client";

import Image from "next/image";
import styles from "./WorkModal.module.css";
import sea1 from "../../../public/images/1.jpg";
import sea2 from "../../../public/images/2.jpg";
import sea4 from "../../../public/images/4.jpg";
import { motion } from "framer-motion";

export default function WorkModal() {
    return (
        <motion.div
            className={styles.projectModal}
            animate={{ width: ["0%", "80%"] }}
        >
            <h1>Test naslov</h1>
            <div className={styles.aboutProject}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum eu felis at elit rutrum tempus ut a ligula.
                    Vivamus sodales lacus in turpis interdum, eget bibendum elit
                    porta. Aliquam vel neque dictum, faucibus justo ac,
                    vulputate sapien. Integer quis hendrerit felis. Quisque
                    sagittis lectus quis mauris eleifend interdum. Duis nec ante
                    sed felis vestibulum rhoncus eget vitae est. Nulla sodales
                    enim non nisi fermentum, et pretium mi mattis. Suspendisse
                    sapien mi, malesuada sit amet lorem nec, tristique suscipit
                    urna. Maecenas vulputate enim sed neque suscipit, vel cursus
                    sapien maximus. Aliquam lobortis lorem et semper placerat.
                    Etiam hendrerit sodales elementum. Pellentesque fringilla,
                    est dictum maximus rutrum, augue odio ullamcorper enim, eget
                    vehicula arcu odio et nisl. Vivamus purus neque, scelerisque
                    vel molestie at, convallis eget mi. Pellentesque imperdiet
                    egestas mauris, sed pharetra justo eleifend in. Aenean mi
                    turpis, sollicitudin ut orci pharetra, auctor vulputate
                    massa. Suspendisse consectetur finibus lobortis. Nullam
                    vehicula orci nec nisl interdum, eget pretium lectus
                    rhoncus. Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Nunc pellentesque nunc nec nisi dapibus molestie.
                    Nullam rhoncus dui ut augue egestas, in rhoncus urna
                    vehicula.
                </p>
                <div className={styles.images}>
                    <Image src={sea1} alt="name" priority />
                    <Image src={sea2} alt="name" priority />
                    <Image src={sea4} alt="name" priority />
                </div>
            </div>
        </motion.div>
    );
}
