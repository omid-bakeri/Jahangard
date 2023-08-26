import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/NavBar/Navbar";
import NotFound from "../Components/NotFound";

function PageNotFound() {
  return (
    <>
      <div
        className="
      h-screen relative"
      >
        <div className="absolute w-full">
          <Navbar />
        </div>
        <div
          className=" flex-col flex justify-start 
        items-center w-full h-screen"
        >
          <NotFound />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
