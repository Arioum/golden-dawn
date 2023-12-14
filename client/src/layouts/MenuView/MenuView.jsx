import { useState } from 'react';
import MenuItem from './MenuItem';
import MenuSidebar from './MenuSidebar';
import ToggleButton from '../../components/Button/ToggleButton';
import classes from './menuView.module.scss';

const MenuView = ({ menuItems }) => {
  const [activeCategoryView, setActiveCategoryView] = useState('Starters');
  const [toggle, setToggle] = useState(false);

  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  const scrollToCategory = (categoryId) => {
    setActiveCategoryView(categoryId);
  };
  return (
    <>
      <section className={classes.menuViewContainer}>
        <MenuSidebar
          menuItems={menuItems}
          scrollToCategory={scrollToCategory}
        />
        <div className={classes.menuItemsView}>
          <section className={classes.menuItemsView__sortAndFilter}>
            <div className={classes.menuItemsView__sortBy__preferenceToggle}>
              <ToggleButton
                toggle={toggle}
                handleToggleChange={handleToggleChange}
              />
            </div>
            <div className={classes.menuItemsView__sortBy__filter}></div>
          </section>
          {menuItems.map((category, index) => (
            <>
              <h2
                key={index}
                className={classes.menuItemsView__categoryHeaders}
              >
                {category._id}
              </h2>
              <hr />
              {category.items.map((item, index) => (
                <MenuItem key={index} menuItem={item} />
              ))}
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default MenuView;
