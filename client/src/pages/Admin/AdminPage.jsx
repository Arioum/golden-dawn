import { useState } from 'react';
import axios from 'axios';
import HeaderLayout from '../../layouts/Header/HeaderLayout';
import Button from '../../components/Button/Button';

const AdminPage = () => {
  const [menuItem, setMenuItem] = useState({
    itemName: '',
    price: 0,
    discount: 0,
    description: '',
    images: [],
    ratings: 0,
    totalOrdered: 0,
    category: '',
    tags: [],
  });

  function onFormChange(e) {
    const { value, name } = e.target;

    if (name === 'images') {
      const files = Array.from(e.target.files);
      setMenuItem((prev) => ({
        ...prev,
        [name]: files,
      }));
    } else {
      setMenuItem((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    e.preventDefault();
  }

  async function createMenuItem(e) {
    const formData = new FormData();

    Object.entries(menuItem).forEach(([key, value]) => {
      if (key === 'images') {
        value.forEach((file) => {
          formData.append('images', file);
        });
      } else {
        formData.append(key, value);
      }
    });
    
    axios
      .post('http://localhost:4000/createItem', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .catch((err) => console.log(`Error occured: ${err}`));
    e.preventDefault();
  }

  return (
    <>
      <HeaderLayout
        title={'Add new Menu Item'}
        subTitle={'Carefully enter item details'}
      >
        <Button></Button>
      </HeaderLayout>
      <form className='container' onSubmit={createMenuItem}>
        <div className=''>
          <label htmlFor=''>Item Name</label>
          <input
            type='text'
            name='itemName'
            value={menuItem.name}
            onChange={(e) => onFormChange(e)}
          />
        </div>
        <div className=''>
          <label htmlFor=''>Price</label>
          <input
            type='number'
            name='price'
            value={menuItem.price}
            onChange={(e) => onFormChange(e)}
          />
        </div>
        <div className=''>
          <label htmlFor=''>Discount</label>
          <input
            type='number'
            name='discount'
            value={menuItem.discount}
            onChange={(e) => onFormChange(e)}
          />
        </div>
        <div className=''>
          <label htmlFor=''>Item Description</label>
          <input
            type='text'
            name='description'
            value={menuItem.description}
            onChange={(e) => onFormChange(e)}
          />
        </div>
        <div className=''>
          <label htmlFor=''>Images</label>
          <input
            type='file'
            name='images'
            multiple
            onChange={(e) => onFormChange(e)}
          />
        </div>

        <div className=''>
          <label htmlFor=''>Category</label>
          <input
            type='text'
            name='category'
            value={menuItem.category}
            onChange={(e) => onFormChange(e)}
          />
        </div>
        <div className=''>
          <label htmlFor=''>Tags</label>
          <input
            type='text'
            name='tags'
            value={menuItem.tags}
            onChange={(e) => onFormChange(e)}
          />
        </div>
        <div className=''>
          <input type='submit' value={'Create Item'} />
        </div>
      </form>
    </>
  );
};

export default AdminPage;
