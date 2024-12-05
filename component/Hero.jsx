import styles from '../styles/Hero.module.css'
import Navbar from "@/component/Navbar";

export default function Hero() {







return (

    <div className={styles.banner}> {/* Hero banner image*/}
        <Navbar/>
        <h1 className={styles.h1}>Éducatrice canin</h1>
        <h2 className={styles.h2}>Fairy Paw</h2>
    </div>

)

}