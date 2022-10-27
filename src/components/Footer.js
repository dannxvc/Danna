import styles from "./Footer.module.css";

function Footer() {
    return ( 
        <footer className={styles.footer}>
            <p className={styles.footer_attribution}>
                ©2022 Danna Vila
            </p>
        </footer>
     );
}

export default Footer;