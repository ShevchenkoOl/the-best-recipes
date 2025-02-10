import { Link } from "react-router-dom";
import style from "./button.module.css";

const Button = ({text, addClass, to}) => <Link to={to} className={`${style.btn} ${style[addClass]}`}>{text}</Link>

export default Button;