import classes from './ChangeLanguage.module.css';

const ChangeLanguage = ({ languageData }) => {
  return (
    <div className={classes.ChangeLanguage}>
      <span>Google offered in: </span>
      {languageData.map((ld) => (
        <Language language={ld} />
      ))}
    </div>
  );
};

const Language = ({ language }) => (
  <span className={classes.Language}>
    <a href={language.source}>{language.languageName}</a>
  </span>
);

export default ChangeLanguage;
