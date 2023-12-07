import { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderLayout from '../../layouts/Header/HeaderLayout';
import MenuView from '../../layouts/MenuView/MenuView';
import classes from './menuPage.module.scss';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      axios
        .get('http://localhost:4000/getMenuItems')
        .then((res) => setMenuItems(res.data))
        .catch((err) => console.log('error loading menu items: ' + err));
    };
    fetchMenuItems();
  }, []);

  {
    /* {item.images.map((img) => (
    <img src={item.images[0].url} alt='No image' width={300} />
  ))} */
  }
  return (
    <>
      <HeaderLayout title={'Menu'} />
      <main className={`container ${classes.menuMain}`}>
        {menuItems ? (
          <MenuView menuItems={menuItems} />
        ) : (
          <p className={classes.menuMain__loading}>Loading Menu...</p>
        )}
      </main>
    </>
  );
};

export default MenuPage;
