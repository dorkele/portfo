import styles from "./About.module.css";

const About = () => {
    return (
        <section className={styles.about}>
            <div>
                <p className="text-outline test">Dora Tominic</p>
                <p className={styles.paragraph}>
                    Proin imperdiet sed purus sed pharetra. Donec elementum eget
                    ex eu tristique. Nulla venenatis massa non odio convallis
                    lobortis. Pellentesque nec porttitor lectus. Sed libero
                    nulla, eleifend non maximus ut, eleifend vel neque.
                </p>
            </div>
        </section>
    );
};

export default About;
