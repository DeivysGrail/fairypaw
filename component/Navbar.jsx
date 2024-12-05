import styles from "../styles/Navbar.module.css"
import Image from "next/image";
import logo from "../public/fairy_paw_Logo.svg"
export default function Navbar() {






    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}><Image className={styles.logo} src={logo}/></li>
                <li className={styles.li}><a className={styles.link} href="/">Accueil</a></li>
                <li className={styles.li}><a className={styles.link} href="./fairyPaw">Fairy Paw</a></li>
                <li className={styles.li}><a className={styles.link} href="./Prestations">Prestations</a></li>
                <li className={styles.li}><a className={styles.link} href="./Tarifs">Tarifs</a></li>
                <li className={styles.li}><a className={styles.link} href="./FAQ">FAQ</a></li>
            </ul>
        </nav>
    )



}