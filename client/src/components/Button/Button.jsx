import { Link } from 'react-router-dom'
import classes from './button.module.scss'

const btnStyle = {
  backgroundColor: "#f0a819",
  padding: ".8em 2em",
  fontSize: "2rem",
  fontWeight: "700",
  borderRadius: ".4em"

}

const Button = ({ type, dest, size, children }) => {
  if (type === "link") {
    return <Link to={`/${dest}`} style={btnStyle}>{children}</Link>
  }
  return (
    <button style={btnStyle}>{children}</button>
  )
}

export default Button