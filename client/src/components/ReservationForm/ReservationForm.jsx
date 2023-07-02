const ReservationForm = () => {
  const isOpen = true;

  return (
    <form>
      {isOpen ? (
        <div className="">
          <label htmlFor="">Table for</label>
          <input type="dropdown" />
        </div>
      ) : null}
    </form>
  )
}

export default ReservationForm