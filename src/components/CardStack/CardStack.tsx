"use client";

import styles from "./CardStack.module.css";
import Paper from "@/components/Paper/Paper";
import { motion } from "framer-motion";
import { useState } from "react";
import move from "lodash-move";
import projects from "../../app/projects/projects.json";

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

export default function CardStack() {
    console.log(projects);
    const [cards, setCards] = useState(projects);
    const moveToEnd = (from: any) => {
        setCards(move(cards, from, cards.length - 1));
    };
    return (
        <div className={styles.cardStack}>
            {cards?.map((project: any, index: number) => {
                const canDrag = index === 0;
                return (
                    <motion.div
                        key={index}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR,
                            zIndex: projects.length - index,
                        }}
                        drag={canDrag ? "y" : false}
                        dragConstraints={{
                            top: 0,
                            bottom: 0,
                        }}
                        onDragEnd={() => moveToEnd(index)}
                        className={styles.wrap}
                    >
                        <Paper project={project} />
                    </motion.div>
                );
            })}
        </div>
    );
}
