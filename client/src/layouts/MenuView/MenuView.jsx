import MenuItem from './MenuItem';
import MenuSidebar from './MenuSidebar';
import classes from './menuView.module.scss';

const MenuView = ({ menuItems }) => {
  return (
    <>
      <section className={classes.menuViewContainer}>
        <MenuSidebar />
        <div className={classes.menuItemsView}>
          {menuItems.map((category, index) => (
            <>
              <h2 key={index} className={classes.menuItemsView__categoryHeaders}>
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
