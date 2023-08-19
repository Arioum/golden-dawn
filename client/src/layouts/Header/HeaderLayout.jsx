import classes from "./header.module.scss";

const HeaderLayout = ({ title, subTitle }) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      {subTitle && <h2>{subTitle}</h2>}
    </header>
  );
};

export default HeaderLayout;
