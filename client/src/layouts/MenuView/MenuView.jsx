import MenuItem from './MenuItem';
import MenuSidebar from './MenuSidebar';
import classes from './menuView.module.scss';

const MenuView = ({ menuItems }) => {
  return (
    <>
      <section className={classes.menuViewContainer}>
        <MenuSidebar />
        <div className=''>
          {menuItems.map((item, index) => (
            <MenuItem key={index} menuItem={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default MenuView;
