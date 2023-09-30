"use client";
import styles from "./Contact.module.css";
import Image from "next/image";
import rainCloud from "../../../public/rain-clouds-png-273.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";

export type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

    return (
        <section className={styles.contact} id="contact">
            <div className={styles.titleDiv}>
                <div className={styles.orangeElement}></div>
                <h2 className={`h2 text-outline ${styles.title}`}>
                    Point of Contact
                </h2>
            </div>
            <div className={styles.content}>
                <div>
                    <p className={styles.paragraph}>
                        Proin imperdiet sed purus sed pharetra. Donec elementum
                        eget ex eu tristique. Nulla venenatis massa non odio
                        convallis lobortis. Pellentesque nec porttitor lectus.
                        Sed libero nulla, eleifend non maximus ut, eleifend vel
                        neque.
                    </p>
                    <Image
                        src={rainCloud}
                        alt="rain cloud"
                        className={styles.cloud1}
                        height={354}
                    />
                </div>
                <div>
                    <form
                        className={styles.form}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <label htmlFor="name">NAME</label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                        />
                        <label htmlFor="email">E-MAIL</label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                        />
                        <label htmlFor="message">MESSAGE</label>
                        <textarea
                            {...register("message", { required: true })}
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
