import "../App.css";
import styles from "../css/Navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul class={styles["nav_bar"]}>
          <li class={styles["nav-links"]}>
            <a href="https://internship.sidehustle.ng/">Side Hustle</a>
          </li>
          <li class={styles["nav-links"]}>
            <a href="https://internship.sidehustle.ng/courses/">Courses</a>
          </li>
          <li class={`${styles["nav-links"]} ${styles.fa_link}`}>
            <a href="https://internship.sidehustle.ng/faq">
              <span class="fa fa-th" title="FAQs"></span>
            </a>
          </li>
          <li class={styles["sign_in"]}>
            <a href="https://internship.sidehustle.ng/login">
              Log in
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
