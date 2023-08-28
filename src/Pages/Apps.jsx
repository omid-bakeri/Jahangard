import Logo from "../Components/Footer/LogoFooter";
function App() {
  return (
    <div
      className="text-white 
     w-full bg-gray-700 h-screen"
    >
      <div className="grid grid-cols-7 h-screen">
        <div className="bg-gray-700 col-span-2 p-4">
          <div className="w-full  flex-col flex justify-center items-center mx-auto">
            <Logo />
            <div
              className="text-lg
            select-none text-gray-500"
            >
              با جهانگرد دور دنیا را بزن
            </div>
          </div>
        </div>
        <div className="bg-gray-800 col-span-5 p-4"></div>
      </div>
    </div>
  );
}

export default App;
