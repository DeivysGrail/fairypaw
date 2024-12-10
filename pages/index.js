import Navbar from "@/component/Navbar";
import styles from'../styles/Hero.module.css'
import Hero from "@/component/Hero";
import Presentation from "@/component/Presentation";
import Footer from "@/component/Footer";

export default function Home() {



    return (
        <>
            <div className="header">
                <Hero heroPage={styles.homeBanner} texte1={"Educatrice canin"} texte2={"FairyPaw"}/>
                <Presentation/>
                <Footer/>

            </div>
        </>
    );
}
