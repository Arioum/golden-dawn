import classes from './menuView.module.scss';

const MenuSidebar = ({ menuItems, scrollToCategory }) => {
  const categories = [
    'Starters',
    'Rice Preparation',
    'Biriyani',
    'Bread',
    'Main Course',
    "Pizza's and Pasta",
    'Dessert',
    'Ice creams',
    'Beverages',
  ];

  return (
    <section className={classes.menuSidebar}>
      <ul>
        {menuItems.map((category, index) => (
          <li key={index}>
            <button
              className={classes.menuSidebar__button}
              onClick={() => scrollToCategory(category._id)}
            >
              <span>{category._id}</span>
              <span>{category.itemsCount}</span>
            </button>
          </li>
        ))}
        <li>
          <button>Rice preparation</button>
        </li>
        <li>
          <button>Biriyani</button>
        </li>
        <li>
          <button>Bread</button>
        </li>
        <li>
          <button>Main course</button>
        </li>
        <li>
          <button>Pizza's and Pasta</button>
        </li>
        <li>
          <button>Dessert</button>
        </li>
        <li>
          <button>Ice creams</button>
        </li>
        <li>
          <button>Beverages</button>
        </li>
      </ul>
    </section>
  );
};

export default MenuSidebar;
