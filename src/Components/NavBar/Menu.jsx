import { NavLink } from "react-router-dom";
function Menu() {
  return (
    <ul className="flex gap-6 items-center">
      <li className="text-lg">
        <NavLink
          className="hover:text-orange-800 hover:duration-500"
          to="/Contact"
        >
          ارتباط با ما
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          to="/About"
          className="hover:text-orange-800 hover:duration-500"
        >
          درباره ما
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
