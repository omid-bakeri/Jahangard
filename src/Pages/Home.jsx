import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/NavBar/Navbar";
import { FaMap } from "react-icons/fa";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div
      className="h-screen relative bg-no-repeat bg-cover
    bg-[linear-gradient(to_right_bottom,rgba(0,4,4,0.7),rgba(6,1,2,0.8)),url('public/assets/images/pexels-photo-3278215.jpeg')]"
    >
      <Navbar />
      <div className="flex flex-col select-none justify-center items-center h-[800px] ">
        <div className="text-4xl font-bold shadow-xl text-gray-200 p-3 pt-4">
          جهانگرد ، دور دنیا رو با جهانگرد بزن{" "}
        </div>
        <div className="text-gray-400 select-none pt-4 p-3 max-w-[900px] text-center leading-10">
          با جهانگرد می توانید هر جایی را بخواهید انتخاب کنید و اطلاعات لازم را
          درباره آن جا و اطلاعات سفر خود ببینید .{" "}
        </div>
        <Link to="/Apps">
          <div
            className="flex gap-3 
        items-center justify-center px-8 
        py-2 rounded-r-full bg-orange-500 select-none
         rounded-l-full shadow-2xl hover:opacity-80 hover:text-white
          hover:duration-500 hover:cursor-pointer active:mt-2"
          >
            <button>بزن بریم رو نقشه</button>
            <i>
              <FaMap />
            </i>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
