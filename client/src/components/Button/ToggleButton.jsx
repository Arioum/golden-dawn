import classes from './button.module.scss';

const ToggleButton = ({ toggle, handleToggleChange }) => {
  return (
    <div className={classes.toggleContainer} onClick={handleToggleChange}>
      <div
        className={`${classes.toggleBtn} ${
          !toggle ? `${classes.disable}` : ''
        }`}
      >
        {/* {toggle ? '🥬' : '🥬'} */}
      </div>
    </div>
  );
};

export default ToggleButton;
