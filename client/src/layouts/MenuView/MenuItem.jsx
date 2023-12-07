import classes from './menuItem.module.scss';

const MenuItem = ({ menuItem }) => {
  const {
    itemName,
    price,
    discount,
    description,
    images,
    ratings,
    totalOrdered,
    category,
    tags,
  } = menuItem;

  return (
    <>
      <article className={classes.menuItem}>
        <section className={classes.menuItem__details}>
          <div className={classes.menuItem__details__left}>
            <h2 className='font-lg'>{itemName}</h2>
            <p className='font-xm'>{description}</p>
          </div>
          <div className={classes.menuItem__details__right}>
            <h2 className='font-lg'>₹{price}</h2>
            <p>Ratings: {ratings}</p>
            <p>TotalOrdered: {totalOrdered}</p>
          </div>
        </section>
        <section className={classes.menuItem__image}>
          {images && images.length > 0 ? (
            images.map((img, index) => (
              <img key={index} src={img.url} alt={`Image ${index}`} />
            ))
          ) : (
            <p>No image available</p>
          )}
        </section>
      </article>
    </>
  );
};

export default MenuItem;
