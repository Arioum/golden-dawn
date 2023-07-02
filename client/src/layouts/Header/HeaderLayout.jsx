import classes from './header.module.scss';

const HeaderLayout = ({ name }) => {
  return (
    <header className={classes.header}>
      <h1>{name}</h1>
    </header>
  )
}

export default HeaderLayout