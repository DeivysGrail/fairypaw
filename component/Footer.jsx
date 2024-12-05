import styles from '../styles/Footer.module.css'

export default function Footer() {







return (

    <div className={styles.footer}>
        <div className={`${styles.socialMedia}`}>
            <ul className={styles.ul}>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Tiktok</li>
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