// Navigation.jsx
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.navLink, isActive && s.activeLinkHeader);
  };
  return (
    <ul className={s.navigation}>
      <li className={s.navigationItem}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={buildLinkClass} to="catalog">
          Car catalog
        </NavLink>
      </li>
      <li>
        <NavLink className={buildLinkClass} to="favorites">
          My Favorites
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
