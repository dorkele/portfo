"use client";
import styles from "./Contact.module.css";
import Image from "next/image";
import rainCloud from "../../../public/rain-clouds-png-273.png";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import Button from "../Button/Button";

export type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const inputRef = useRef(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [focusedInput, setFocusedInput] = useState("");

    function onSubmit(data: FormData) {
        sendEmail(data);
    }
    useEffect(() => {
        console.log(inputRef.current);
    }, [inputRef]);

    return (
        <section className={styles.contact} id="contact">
            <div className={styles.titleDiv}>
                <div className={styles.orangeElement}></div>
                <h2 className={`h1 text-outline ${styles.title}`}>
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
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            className={styles.input}
                            placeholder="NAME"
                            ref={inputRef}
                            onFocus={() => setFocusedInput("name")}
                            onBlur={() => setFocusedInput("")}
                        />
                        {focusedInput === "name" && (
                            <label htmlFor="name">Name</label>
                        )}
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className={styles.input}
                            placeholder="EMAIL"
                            ref={inputRef}
                            onFocus={() => setFocusedInput("email")}
                            onBlur={() => setFocusedInput("")}
                        />
                        {focusedInput === "email" && (
                            <label htmlFor="email">Email</label>
                        )}
                    </div>
                    <div className={styles.inputContainer}>
                        <textarea
                            {...register("message", { required: true })}
                            className={styles.input}
                            placeholder="MESSAGE"
                            rows={10}
                            ref={inputRef}
                            onFocus={() => setFocusedInput("message")}
                            onBlur={() => setFocusedInput("")}
                        />
                        {focusedInput === "message" && (
                            <label htmlFor="message">Your message</label>
                        )}
                    </div>
                    <Button type="submit" text="Send" />
                </form>
            </div>
        </section>
    );
};

export default Contact;
