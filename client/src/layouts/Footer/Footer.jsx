import classes from "./footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <div className="">

      </div>
      <div className={classes.footer__links}>
        <ul>
          
        </ul>
      </div>
      <p>{year}</p>
    </footer>
  )
}

export default Footer