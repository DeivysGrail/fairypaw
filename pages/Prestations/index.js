import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import styles from "@/styles/Hero.module.css";
import Footer from "@/component/Footer";
import Prestation from "@/component/Prestation";


export default function index() {







return (
    <>
<Navbar/>
        <Hero heroPage={styles.PrestationBanner} texte1={"Prestations"} texte2={"Mes services"}/>
        <Prestation/>
        <Footer/>

    </>


)

}