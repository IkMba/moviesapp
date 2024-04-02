import styles from "./Footer.module.css";
import Icons from "./Icons";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLinks}>
        <h6>Terms of use</h6>
        <h6>Privacr-Policy</h6>
        <h6>About</h6>
        <h6>Blog</h6>
        <h6>FAQ</h6>
      </div>
      <div className={styles.footerText}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maxime
          quo perspiciatis, asperiores quam a distinctio exercitationem tenetur,
          ea repudiandae quas, corrupti beatae. Ullam eius alias harum debitis
          itaque reprehenderit expedita nisi sunt voluptates nemo! Suscipit eius
          nam voluptas quasi ab, optio maiores ut? Officiis provident iusto
          saepe aperiam officia?
        </p>
      </div>
      <div className={styles.footerBrands}>
        <Icons name="logo-facebook" />
        <Icons name="logo-twitter" />
        <Icons name="logo-instagram" />
        <Icons name="logo-linkedin" />
      </div>
    </div>
  );
}

export default Footer;
