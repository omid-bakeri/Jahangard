import Logo from "./Logo";
import Menu from "./Menu";

function Navbar() {
  return (
    <div className="w-full opacity-90 shadow-lg bg-orange-500">
      <div
        className="px-4
    py-2
     flex justify-between
      items-center max-w-[1400px] mx-auto"
      >
        <Logo />
        <Menu />
      </div>
    </div>
  );
}

export default Navbar;
