import { useInput } from '../../context/InputContext';
import classes from './Label.module.css';
const Label = () => {
  const { value } = useInput();

  let child;
  if (!value) {
    child = (
      <div className={classes.LabelLogo}>
        <img
          src="/img/sidehustle.png"
          alt="sidehustle logo"
        />
      </div>
    );
  } else {
    child = (
      <div className={classes.WrittenTextBox}>{value}</div>
    );
  }
  return <div className={classes.Label}>{child}</div>;
};

export default Label;
