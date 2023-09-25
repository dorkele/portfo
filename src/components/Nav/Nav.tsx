import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
    const links = [
        {
            href: "/#contact",
            name: "Contact",
        },
        {
            href: "/#cv",
            name: "Curriculum Vitae",
        },
        {
            href: "/#projects",
            name: "Projects",
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
