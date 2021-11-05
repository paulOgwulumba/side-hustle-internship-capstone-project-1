import '../App.css'
import styles from '../css/Navbar.module.css';

const Navbar = () => {
  return <header>
  <nav>
    <ul class={styles["nav_bar"]} >
      <li class={styles["nav-links"]} id="gmail">
        <a href="https://mail.google.com/mail/&ogbl">
          Gmail
        </a>
      </li>
      <li class={styles["nav-links"]}>
        <a href="https://www.google.com.ng/imghp?hl=en&ogbl">
          Images
        </a>
      </li>
      <li class={`${styles["nav-links"]} ${styles.fa_link}`}>
        <a href="https://www.google.com.ng/intl/en/about/products">
          <span class="fa fa-th"></span>
        </a>
      </li>
      <li class={styles["sign_in"]}>
        <a href="https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=GAZAmgQ">
          Sign in
        </a>
      </li>
    </ul>  
  </nav>  
</header>  
}

export default Navbar;