import Navbar from "@/component/Navbar";
import '../styles/Home.module.css'
import Hero from "@/component/Hero";
import Presentation from "@/component/Presentation";
import Footer from "@/component/Footer";

export default function Home() {
    return (
        <>
            <div className="header">
                <Hero/>
                <Presentation/>
                <Footer/>

            </div>
        </>
    );
}
