import Logo from "./Logo";
import Menu from "./Menu";

function Navbar() {
  return (
    <div
      className="px-4 shadow-lg w-full
    py-2 bg-orange-500
     flex justify-between
      items-center"
    >
      <Logo />
      <Menu />
    </div>
  );
}

export default Navbar;
