import styles from "./About.module.css";
import Image from "next/image";
import rainCloud from "../../../public/rain-clouds-png-273.png";

const About = () => {
    return (
        <section className={styles.about}>
            <Image
                src={rainCloud}
                alt="rain cloud"
                className={styles.cloud1}
                height={235}
            />
            <div>
                <div>
                    <div className={styles.orangeElement}></div>
                    <p className={`text-outline test ${styles.title}`}>
                        Dora Tominic
                    </p>
                </div>
                <p className={styles.paragraph}>
                    Proin imperdiet sed purus sed pharetra. Donec elementum eget
                    ex eu tristique. Nulla venenatis massa non odio convallis
                    lobortis. Pellentesque nec porttitor lectus. Sed libero
                    nulla, eleifend non maximus ut, eleifend vel neque.
                </p>
            </div>
            <Image
                src={rainCloud}
                alt="rain cloud"
                className={styles.cloud2}
                height={339}
            />
        </section>
    );
};

export default About;
