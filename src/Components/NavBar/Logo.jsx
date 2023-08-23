import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="flex px-2 
      py-1 justify-start items-center 
      gap-2"
    >
      <img
        width="48"
        height="48"
        src="https://img.icons8.com/color/48/world-map-continents.png"
        alt="world-map-continents"
      />
      <h3 className="text-orange-900 opacity-90 text-2xl">جهانگرد</h3>
    </Link>
  );
}

export default Logo;
