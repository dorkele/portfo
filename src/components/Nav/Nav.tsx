import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
    const links = [
        {
            href: "/",
            name: "About Me",
        },
        {
            href: "/#projects",
            name: "Projects",
        },
        {
            href: "/#cv",
            name: "Curriculum Vitae",
        },
        {
            href: "/#contact",
            name: "Point of Contact",
        },
    ];

    return (
        <nav className={styles.nav}>
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
        </nav>
    );
};

export default Nav;
