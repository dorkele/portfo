"use client";
import Project from "../Project/Project";
import styles from "./Projects.module.css";
import { Fragment, useState } from "react";
import projects from "../../../projects.json";

const Projects = () => {
    const [expanded, setExpanded] = useState<null | number>(null);

    const handleExpand = (index: number) => {
        if (expanded === index) {
            setExpanded(null);
        } else {
            setExpanded(index);
        }
    };

    return (
        <section className={styles.projects} id="projects">
            {projects.map((project, index) => {
                return (
                    <Fragment key={index}>
                        <div
                            key={index}
                            className={styles.row}
                            onClick={() => handleExpand(index)}
                        >
                            <h2
                                className={`h2 text-outline text-outline-orange-fill ${styles.title}`}
                            >
                                {project.name}
                            </h2>
                        </div>
                        <Project
                            expanded={expanded === index ? true : false}
                            project={projects[index]}
                        />
                    </Fragment>
                );
            })}
        </section>
    );
};

export default Projects;
