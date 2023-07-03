import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import classes from './reservationForm.module.scss'

const ReservationForm = () => {
  const [isOpen, setIsOpen] = useState(true);

  // setInterval(() => {
  //   getTime()
  // }, 60000)

  const getTime = () => {
    const time = new Date().toLocaleTimeString().split(" ");
    const modTime = time[0].split(":");
    console.log(modTime);
  }
  getTime();

  useEffect(() => {
  }, [])

  return (
    <form className={classes.form}>
      <h1>Quick Reserve</h1>
      {isOpen ? (
        <div className={classes.form__inputContainer}>
          <div className={classes.form__inputContainer__group}>
            <label htmlFor="">Table for</label>
            <select name="" id="">
              <option value="">1</option>
            </select>
          </div>

          <div className={classes.form__inputContainer__group}>
            <label htmlFor="">Table for</label>
            <select name="" id="">
              <option value="">1</option>
            </select>
          </div>

          <label htmlFor="">Table for</label>
          <input type="radio" />
          <input type="radio" />

          <Button>Next</Button>
        </div>
      ) : null}
    </form>
  )
}

export default ReservationForm