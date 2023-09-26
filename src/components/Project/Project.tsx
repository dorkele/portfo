import styles from "./Project.module.css";
import Image from "next/image";

type ProjectProps = {
    expanded: boolean;
    project: {
        name: string;
        imgBatch1?: { src: string }[];
        text1?: string;
        imgBatch2?: { src: string }[];
        text2?: string;
    };
};

const Project = ({ expanded, project }: ProjectProps) => {
    return (
        <section
            className={`${expanded ? styles.expanded : styles.project}`}
            id="project"
        >
            <div className={styles.content}>
                <div className={styles.img1Container}>
                    {project.imgBatch1?.map((img) => {
                        return (
                            <Image
                                src={img.src}
                                alt=""
                                fill={true}
                                style={{ objectFit: "cover" }}
                            />
                        );
                    })}
                </div>
                <div className={styles.textBox1}>
                    <p>{project.text1}</p>
                </div>
                <div className={styles.img2Container}>
                    {project.imgBatch2?.map((img) => {
                        return (
                            <Image
                                src={img.src}
                                alt=""
                                fill={true}
                                style={{ objectFit: "cover" }}
                            />
                        );
                    })}
                </div>
                <div className={styles.textBox2}>
                    <p>{project.text2}</p>
                </div>
            </div>
        </section>
    );
};

export default Project;
