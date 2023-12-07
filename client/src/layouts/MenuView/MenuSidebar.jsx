import classes from './menuView.module.scss';

const MenuSidebar = () => {
  return (
    <section className={classes.menuSidebar}>
      <ul>
        <li><button>Starters</button></li>
        <li><button>Rice preparation</button></li>
        <li><button>Biriyani</button></li>
        <li><button>Bread</button></li>
        <li><button>Main course</button></li>
        <li><button>Beverages</button></li>
        <li><button>Pizza's and Pasta</button></li>
      </ul>
    </section>
  )
}

export default MenuSidebar