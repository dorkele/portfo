"use client"
import Link from "next/link";
import styles from "./Nav.module.css";
import { useState } from "react";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const links = [
        {
            href: "/#",
            name: "Scroll to top",
        },
        // {
        //     href: "/#projects",
        //     name: "Projects",
        // },
        // {
        //     href: "/#cv",
        //     name: "Curriculum Vitae",
        // },
        {
            href: "/#contact",
            name: "Point of Contact",
        },
    ];

    // navBlur needs to be a separate element because otherwise the links will iherit the blur filter
    return (
        <nav className={styles.nav}>
            {isMenuOpen && 
                <div className={`${styles.menu} ${isMenuOpen && styles.openMenu}`}>
                    <div className={styles.navBlur}>''</div>
                    <div className={styles.links}>
                        {links.map((link, index) => {
                            return (
                                <Link
                                    href={link.href}
                                    key={`${index}` + `${link.href}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            }
            <button 
                className={styles.navButton} 
                onClick={()=>setIsMenuOpen(!isMenuOpen)}
            >
                hey
            </button>
            
        </nav>
    );
};

export default Nav;
