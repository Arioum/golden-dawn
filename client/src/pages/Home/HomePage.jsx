import Button from '../../components/Button/Button'
import ReservationForm from '../../components/ReservationForm/ReservationForm'
import classes from './home.module.scss'

const HomePage = () => {
  return (
    <main className={classes.home}>
      <section className={classes.home__sectionHero}>
        <div className={classes.home__sectionHero__group}>
          <div>
            <h1 className={classes.home__heroText}>
              A taste that you cant resist!
            </h1>
            <div className={classes.home__ctaBox}>
              <Button type={"link"} dest={"menu"}>Book Now!</Button>
              <Button type={"link"} dest={"reservation"}>Reserve a table</Button>
            </div>
          </div>
          <ReservationForm />
        </div>
      </section>
    </main>
  )
}

export default HomePage