
import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import styles from "@/styles/Hero.module.css";
import Footer from "@/component/Footer";

export default function index() {







return (<>
    <Navbar/>
        <Hero heroPage={styles.FaqBanner} texte1={"FAQ"} texte2={"Ce qu'il faut savoir"}/>
        <Footer/>


    </>



)

}