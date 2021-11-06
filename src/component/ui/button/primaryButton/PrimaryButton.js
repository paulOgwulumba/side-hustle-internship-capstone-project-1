import classes from './PrimaryButton.module.css';

const PrimaryButton = ({ href, name }) => {
  return (
    <a href={href} className={classes.PrimaryButton}>
      {name}
    </a>
  );
};

export default PrimaryButton;
