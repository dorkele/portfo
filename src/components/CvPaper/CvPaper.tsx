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
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum eu felis at elit rutrum tempus ut a ligula. Vivamus
                sodales lacus in turpis interdum, eget bibendum elit porta.
                Aliquam vel neque dictum, faucibus justo ac, vulputate sapien.
                Integer quis hendrerit felis.
            </p>
            <p>
                Quisque sagittis lectus quis mauris eleifend interdum. Duis nec
                ante sed felis vestibulum rhoncus eget vitae est. Nulla sodales
                enim non nisi fermentum, et pretium mi mattis. Suspendisse
                sapien mi, malesuada sit amet lorem nec, tristique suscipit
                urna. Maecenas vulputate enim sed neque suscipit, vel cursus
                sapien maximus.
            </p>
            <p>
                Aliquam lobortis lorem et semper placerat. Etiam hendrerit
                sodales elementum. Pellentesque fringilla, est dictum maximus
                rutrum, augue odio ullamcorper enim, eget vehicula arcu odio et
                nisl. Vivamus purus neque, scelerisque vel molestie at,
                convallis eget mi. Pellentesque imperdiet egestas mauris, sed
                pharetra justo eleifend in.
            </p>
            <p>
                Aenean mi turpis, sollicitudin ut orci pharetra, auctor
                vulputate massa. Suspendisse consectetur finibus lobortis.
                Nullam vehicula orci nec nisl interdum, eget pretium lectus
                rhoncus. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Nunc pellentesque nunc nec nisi dapibus molestie.
                Nullam rhoncus dui ut augue egestas, in rhoncus urna vehicula.
            </p>
        </div>
    );
}
