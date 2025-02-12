import { Link } from "react-router-dom";
import style from "./navigation.module.css";
import PropTypes from "prop-types";
const NavItem = ({ to, navName }) => {
  return (
    <li className={style.nav__item}>
      <Link to={to} className={style.nav__link}>
        {navName}
      </Link>
    </li>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  navName: PropTypes.string.isRequired,
};

export default NavItem;
