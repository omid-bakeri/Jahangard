import Navbar from "../Components/NavBar/Navbar";
import NotFound from "../Components/NotFound";

function PageNotFound() {
  return (
    <>
      <div
        className="
      h-screen relative"
      >
        <div className=" w-full">
          <Navbar />
        </div>
        <div
          className=" flex-col flex justify-start 
        items-center w-full h-screen"
        >
          <NotFound />
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
