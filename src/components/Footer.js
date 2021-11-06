import "../App.css";
import classes from "../css/Footer.module.css";

const footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterBackground}>
        <div className={classes.Nigeria} style={{ fontSize: "15px" }}>
          Nigeria
        </div>

        <div className={classes.Line}></div>
        <div className={classes.FooterContent}>
          <div className={classes.Carbon}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC"
              alt="carbon neutral icon"
            />
            <a href="/">Carbon neutral since 2007</a>
          </div>
          <div className={classes.Links1}>
            <div>
              <a href="/">About</a>
            </div>
            <div>
              <a href="/">Advertising</a>
            </div>
            <div>
              <a href="/">Business</a>
            </div>
            <div>
              <a href="/">How Search works</a>
            </div>
          </div>
          <div className={classes.Links2}>
            <div>
              <a href="/">Privacy</a>
            </div>
            <div>
              <a href="/">Terms</a>
            </div>
            <div>
              <a href="/">Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
