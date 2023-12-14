import classes from './header.module.scss';

const HeaderLayout = ({ title, subTitle }) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      {subTitle && <h2>{subTitle}</h2>}
      {/* {title == 'Menu' && <input type='search' name='' id='' />} */}
    </header>
  );
};

export default HeaderLayout;
