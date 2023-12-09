import { Link } from "react-router-dom";
import classes from "./button.module.scss";

const Button = ({ type, width, fontSize, bgColor, borderRadius, height, dest, children }) => {
  const btnStyle = {
    backgroundColor:  bgColor || "#f0a819",
    padding: ".8em 2em",
    fontSize: fontSize || "1.6rem",
    fontWeight: "700",
    borderRadius: borderRadius + "px" || ".4em",
    width: width + "px",
    height: height + "px"
  };

  if (type === "link") {
    return (
      <Link to={`/${dest}`} style={btnStyle}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes.button} style={btnStyle}>
      {children}
    </button>
  );
};

export default Button;
