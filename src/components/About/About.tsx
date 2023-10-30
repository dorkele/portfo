import styles from "./About.module.css";
import Image from "next/image";
import rainCloud from "../../../public/rain-clouds-png-273.png";

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.contentContainer}>
                <Image
                    src={rainCloud}
                    alt="rain cloud"
                    className={styles.cloud1}
                    height={235}
                />
                <div>
                    <div>
                        <div className={styles.orangeElement}></div>
                        <h1 className={`text-outline h1 ${styles.title}`}>
                            Dora Tominic
                        </h1>
                    </div>
                    <p className={styles.paragraph}>
                        Meticulous Frontend Developer with a passion for
                        storytelling on the web.
                    </p>
                </div>
                <Image
                    src={rainCloud}
                    alt="rain cloud"
                    className={styles.cloud2}
                    height={339}
                />
            </div>
        </section>
    );
};

export default About;
