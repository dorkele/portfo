import styles from "./Projects.module.css";

const Projects = () => {
    const projects = [
        { name: "Nevidljivi solo" },
        { name: "Sobbing Bookstore" },
        { name: "Piskaralo" },
        { name: "Bookie" },
        { name: "Shljokice" },
        { name: "Playground" },
    ];
    return (
        <section className={styles.projects} id="projects">
            {projects.map((project, index) => {
                return (
                    <div key={index} className={styles.row}>
                        <h2
                            className={`h2 text-outline text-outline-orange-fill ${styles.title}`}
                        >
                            {project.name}
                        </h2>
                    </div>
                );
            })}
        </section>
    );
};

export default Projects;
