import Navbar from "../Components/NavBar/Navbar";

function PageNotFound() {
  return (
    <>
      <div
        className="bg-red-400 
      h-screen relative"
      >
        <div className="">
          <Navbar />
        </div>
        <div
          className="w-full flex 
          justify-center
         items-center text-black"
        >
          صفحه مورد نظر شما پیدا نشد :(
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
