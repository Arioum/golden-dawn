import { IoTrashSharp } from 'react-icons/io5';

import Button from '../../components/Button/Button';
import classes from './cartOverlay.module.scss';

const CartOverlay = () => {
  return (
    <section className={`container ${classes.cartOverlay}`}>
      <div className={classes.cartOverlay__contents}>
        <div className={classes.cartOverlay__left}></div>
        <div className={classes.cartOverlay__right}>
          <span className={classes.cartOverlay__right__clearItemBtn}>
            <IoTrashSharp color={'#f0a819'} title='Clear Cart' size={24} />
          </span>
          <Button
            type='link'
            width='200'
            fontSize='2rem'
            borderRadius='10'
            height='60'
            dest='/place-order'
          >
            Place Order
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CartOverlay;
