import { Link } from "react-router-dom";
function Menu() {
  return (
    <ul className="flex gap-6">
      <li
        className=" px-2 py-1 
      rounded-sm hover:cursor-pointer 
      outline-none hover:duration-500"
      >
        <Link
          to="Contact"
          className="text-lg
         hover:text-orange-800
          hover:duration-500 text-gray-100"
        >
          ارتباط با ما
        </Link>
      </li>
      <li
        className=" px-2 py-1 
      rounded-sm hover:cursor-pointer 
      outline-none hover:duration-500  hover:text-orange-800"
      >
        <a
          className="text-lg text-gray-100
         hover:text-orange-800
          hover:duration-500"
        >
          درباره ما
        </a>
      </li>
    </ul>
  );
}

export default Menu;
