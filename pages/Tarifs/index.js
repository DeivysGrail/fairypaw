import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import styles from "@/styles/Hero.module.css";
import Footer from "@/component/Footer";


export default function index() {







return (
    <>
    <Navbar/>
        <Hero heroPage={styles.TarifsBanner} texte1={"Tarifs"} texte2={"Nos prix"}/>
        <Footer/>

    </>


)

}