import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/NavBar/Navbar";
function ContectUs() {
  return (
    <>
      <div className="w-full">
        <Navbar />
      </div>
      <div
        className="items-start 
      bg-[linear-gradient(to_right_bottom,rgba(0,4,4,0.7),rgba(6,1,2,0.8)),url('public/assets/images/kv-contact-us-xs.jpg')]
       h-screen relative bg-no-repeat bg-cover bg-right flex"
      >
        <div
          className="flex justify-end 
        items-center h-screen absolute w-full"
        >
          <div
            className="flex flex-col ml-20 w-[600px]
        gap-4 text-gray-300 border border-xl 
        px-8 py-4 rounded-lg border-gray-400"
          >
            <div className="font-bold text-2xl">ارتباط با ما</div>
            <div>می توانید از راه های زیر با ما ارتباط برقرار کنید .</div>
            <div className="flex justify-start gap-2 items-center">
              <div className="">شماره همراه : </div>
              <div className="font-iransans-black">09017990325</div>
            </div>
            <div>آدرس الکترونیکی : Robert.minia01@gmail.com</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContectUs;
