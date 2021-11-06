import NavigationList from '../navigation/navigationList/NavigationList';
import style from './Footer.module.css';

const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Adversiting', href: '#' },
  { title: 'Business', href: '#' },
  { title: 'How search works?', href: '#' },
  { title: 'Privacy', href: '#' },
  { title: 'Terms', href: '#' },
  { title: 'Settings', href: '#' },
];

const Footer = () => {
  return (
    <footer className={style.Footer}>
      <div className={style.LocationCaption}>
        <h4>Nigeria</h4>
      </div>
      <div>
        <nav className={style.Nav}>
          <NavigationList items={footerLinks.slice(0, 3)} />
          <ul className={style.NavList_2}>
            <NavigationList items={footerLinks.slice(3)} />
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
