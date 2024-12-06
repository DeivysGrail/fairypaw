import styles from '../styles/Hero.module.css'
import Navbar from "@/component/Navbar";

export default function Hero(props) {






return (

    <div className={`${styles.banner} ${props.heroPage}`}> {/* Hero banner image*/}
        <Navbar/>
        <h1 className={styles.h1}>{props.texte1}</h1>
        <h2 className={styles.h2}>{props.texte2}</h2>
    </div>

)

}