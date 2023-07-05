import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button'
import Logo from '/assets/logo.svg'
// import { PiInstagramLogoFill } from 'react-icons/pi'
import classes from "./footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classes.footer__container__brand}>
          <img src={Logo} alt='Golder Dawn Logo' width={200} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo debitis eligendi doloribus ea fuga voluptate labore et! Esse.</p>
          <div className="">
            {/* <img src={PiInstagramLogoFill} alt="ds" /> */}
          </div>
        </div>
        <div className={classes.footer__container__links}>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <li></li>
            <li>sdd</li>
            <li></li>
          </ul>
        </div>
        <div className={classes.footer__container__newsletter}>
          <h4>Subscribe to our Newsletter</h4>
          <div className="">
            <input type="email" placeholder='Enter your email'/>
            <Button type={"button"} width={100}>Subscribe</Button>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        <p>©{year} Designed and developed by <Link to='https://github.com/arioum'>Arioum</Link>. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer