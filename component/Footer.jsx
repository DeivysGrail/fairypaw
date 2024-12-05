import styles from '../styles/Footer.module.css'
import logoInsta  from '../public/icons/instagram.svg'
import logoFacebook  from '../public/icons/facebook.svg'
import logoTiktok from '../public/icons/tiktok.svg'
import Image from "next/image";

export default function Footer() {







return (

    <div className={styles.footer}>
        <div className={`${styles.socialMedia}`}>
            <ul className={styles.ul}>
                <Image className={styles.ico} src={logoInsta}/>
                <Image className={styles.ico} src={logoFacebook}/>
                <Image className={styles.ico} src={logoTiktok}/>
            </ul>
        </div>
        <div className={`${styles.planDuSite}`}>
            <ul className={styles.ul}>
                <li>Qui-suis je ?</li>
                <li>Mes services</li>
                <li>Les tarifs</li>
                <li>Foire aux questions</li>
                <li></li>
            </ul>
        </div>
        <div className={`${styles.infos}`}>
            <ul className={styles.ul}>
                <li>CGV</li>
                <li>CGU</li>
                <li>Mentions Légales</li>
                <li>Partenaires</li>
            </ul>
        </div>
    </div>

)

}