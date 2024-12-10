import styles from '../styles/Prestation.module.css'
import {useState} from "react";
import Image from "next/image";
export default function Prestation() {


    const bilan_comportemental = 'Le bilan comportemental permet de.....'
    const balade_educative = 'La balade éducative vise à .....'
    const cours_particulier = 'Les cours particulier permettent de.....'
    const cours_collectif = 'Contrairement au cours particulier, les cours collectifs...'

    const [texte, setTexte] = useState()




return (
<>
<div className={styles.prestation}>
    <div className={`${styles.presta1} ${styles.presta}`} onClick={() => setTexte(bilan_comportemental)}>
        <p>Bilan comportementale</p>
    </div>
    <div className={`${styles.presta2} ${styles.presta}`} onClick={() => setTexte(balade_educative)}>
        <p>Balade éducative</p>
    </div>
    <div className={`${styles.presta3} ${styles.presta}`} onClick={() => setTexte(cours_particulier)}>
        <p>Cours particuliers</p>
    </div>
    <div className={`${styles.presta4} ${styles.presta}`} onClick={() => setTexte(cours_collectif)}>
        <p>Cours collectifs</p>
    </div>

</div>
    <div className={styles.presta_texte}>
        <p>{texte}</p>
    </div>
</>
)

}