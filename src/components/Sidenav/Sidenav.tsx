import styles from "./Sidenav.module.css";
import Link from "next/link";

export default function Sidenav() {
    return (
        <section className={styles.sidenav}>
            <Link href="cvs">work</Link>
            <Link href="cvs">curriculum vitae</Link>
            <Link href="cvs">about this page</Link>
            <Link href="cvs">links</Link>
            <Link href="cvs">contact</Link>
        </section>
    );
}
