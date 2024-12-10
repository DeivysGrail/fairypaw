import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import styles from "../../styles/Hero.module.css"
import About from "@/component/About";
export default function index() {


    return (
        <>
            <Navbar/>
            <Hero heroPage={styles.FairyPawBanner} texte1={"FairyPaw"} texte2={"Qui suis-je ?"}/>
            <About/>
        </>


    )

}