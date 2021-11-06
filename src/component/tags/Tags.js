import classes from './Tags.module.css';

const Tag = ({ children }) => (
  <span className={classes.Tag}>{children}</span>
);

const Tags = ({ tagTitles }) => {
  return (
    <div className={classes.Tags}>
      {tagTitles.map((title) => (
        <Tag>{title}</Tag>
      ))}
    </div>
  );
};

export default Tags;
