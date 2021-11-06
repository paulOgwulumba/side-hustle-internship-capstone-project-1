import classes from './NavigationList.module.css';

const NavigationList = ({ items }) => {
  return (
    <ul className={classes.NavigationList}>
      {items.map((item) => (
        <li key={item.href}>{item.title}</li>
      ))}
    </ul>
  );
};

export default NavigationList;
