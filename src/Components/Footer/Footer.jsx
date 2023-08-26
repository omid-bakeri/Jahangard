import Logo from "./LogoFooter";
import { FaInstagram, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <div
      className="bg-gray-700  opacity-90
  absolute w-full p-4 bottom-0 "
    >
      <div className="flex justify-between max-w-[1600px] mx-auto items-center">
        <Logo />
        <div
          className="text-xl selection:bg-orange-500
         selection:text-white text-gray-500"
        >
          تمامی حق کپی رایت برای شرکت جهانگرد می باشد.
        </div>
        <div className="flex gap-2">
          <FaInstagram
            className="text-gray-400 hover:cursor-pointer text-3xl
            hover:bg-gradient-to-r hover:rounded-xl
             from-purple-400
              to-pink-600 hover:duration-500"
          />
          <FaTelegram
            className="text-gray-400 hover:cursor-pointer text-3xl
           hover:text-[#229ED9] hover:duration-500"
          />
          <FaTwitter
            className="text-gray-400 hover:cursor-pointer text-3xl
           hover:text-[#00acee] hover:duration-200"
          />
          <FaYoutube
            className="text-gray-400 hover:cursor-pointer text-3xl
           hover:text-[#c4302b] hover:duration-200"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
