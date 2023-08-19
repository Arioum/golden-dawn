import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Logo from "/assets/logo.svg";
// import { PiInstagramLogoFill } from 'react-icons/pi'
import classes from "./footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classes.footer__container__brand}>
          <img src={Logo} alt='Golder Dawn Logo' width={200} />
          <p>
            Golden Dawn restaurants and chain is Evankhell's most revered brand
            of establishments which is known for its fine dining experience
          </p>
          <div className=''>
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
            <li>Careers</li>
            <li>Testimonials</li>
            <li>Reviews</li>
          </ul>
          <ul>
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className={classes.footer__container__newsletter}>
          <h4>Subscribe to our Newsletter</h4>
          <div className={classes.footer__container__newsletter__inputCont}>
            <input type='email' placeholder='Enter your email' />
            <Button type={"button"} width={150} height={50} borderRadius={0}>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        <p>
          ©{year} Designed and developed by{" "}
          <Link to='https://github.com/arioum'>Arioum</Link>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
