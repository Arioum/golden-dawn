import { Link } from 'react-router-dom';
import '../../sass/main.scss';
import classes from "./navbar.module.scss"
import UserAction from '../../components/UserAccount/UserAction';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__container}>
        <div className={classes.navbar__logoBox}>
          <Link to="/">
            <img src="/assets/logo.svg" alt="Golden Dawn logo" className={classes.navbar__logo} />
          </Link>
        </div>
        <div className={classes.navbar__itemsBox}>
          <ul>
            <li className={classes.navbar__itemLink}><Link to="/menu">Menu</Link></li>
            <li className={classes.navbar__itemLink}><Link to="/reservation">Reservation</Link></li>
            <li className={classes.navbar__itemLink}><Link to="/contact">Contact</Link></li>
            <UserAction/>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar