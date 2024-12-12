import styles from '../styles/About.module.css'
import Image from "next/image";
import FairyPawPhoto from "../public/photo_FairyPaw.jpg"

export default function About() {


    return (
        <>
            <div className={styles.about}>
                <div className={styles.photo_container}>
                    <Image className={styles.img} src={FairyPawPhoto}/>
                </div>
                <div className={styles.text_container}>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi atque autem consequatur cupiditate debitis deserunt distinctio dolores eum exercitationem expedita facilis fugit hic in iusto laborum magnam molestias nam nihil odio, omnis pariatur perspiciatis possimus quaerat quisquam quod reiciendis reprehenderit saepe, sed similique sit sunt suscipit tempora ut velit veniam vero. A accusantium ad aliquid at consectetur consequuntur dolor ducimus enim eveniet ex exercitationem, illo impedit labore maxime nisi nostrum optio placeat quasi reiciendis reprehenderit suscipit veniam voluptatem! Alias asperiores consequatur, dignissimos ducimus est ex excepturi expedita explicabo facere fugit hic id illum iste iusto labore, laudantium maiores minima modi nam necessitatibus nihil nisi omnis, optio provident quae quas quasi quis quo quos reiciendis repellat sunt tenetur ullam unde voluptas voluptate voluptatem? A, adipisci cum cumque doloribus earum eveniet ex illo impedit incidunt iusto, labore laboriosam nesciunt non obcaecati quibusdam quo quod rem similique sunt, voluptas voluptate voluptatem voluptates.</p>
                </div>
            </div>
            <div>
                <p></p>
            </div>


        </>


    )

}