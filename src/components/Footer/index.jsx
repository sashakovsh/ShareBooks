import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer} ${styles.container}`}>
      <div className={styles.footer_midlle}>
          <h2>ShareBooks &copy; 2023</h2>
          <div className={styles.social}>
              <a className={styles.telegramm} target="_blank" href="#">
                  <img src="./main_img/telegram.svg" alt="telegramm"/> 
              </a>
              <a className={styles.vk} target="_blank" href="#"> 
                <img src="./main_img/vk.svg" alt="VK"/>
              </a>
              <a className={styles.instagram} target="_blank" href="#">
                <img src="./main_img/instagram.svg" alt="instagram"/>
              </a>
          </div>
      </div>
  </footer>
  );
};

export default Footer;
