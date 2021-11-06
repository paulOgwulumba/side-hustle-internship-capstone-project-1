import PrimaryButton from '../ui/button/primaryButton/PrimaryButton';
import NavigationList from './navigationList/NavigationList';
import classes from './Navigation.module.css';

const navigationLinks = [
  { title: 'Sidehustle', href: '#' },
  { title: 'images', href: '#' },
];

const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <NavigationList items={navigationLinks} />
      <PrimaryButton href="#" name="sign in" />
    </nav>
  );
};

export default Navigation;
