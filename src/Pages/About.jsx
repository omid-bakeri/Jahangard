import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/NavBar/Navbar";
import {
  FaGithub,
  FaJs,
  FaGoogle,
  FaReact,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
function About() {
  return (
    <>
      <Navbar />
      <div
        className="flex 
      justify-center items-center bg-gray-300 h-[800px]"
      >
        <div
          className="p-4 border border-xl
           border-black rounded-md shadow-lg
           overflow-x-hidden overflow-y-scroll
        w-[600px] mx-auto mt-4 bg-gray-500 h-[700px]"
        >
          <div className="text-gray-200">درباره ما</div>
          <img
            className="w-32 mx-auto rounded-xl shadow-sm"
            src="../../public/assets/images/photo_2023-08-28_10-51-57.jpg"
            alt="image-about"
          />
          <div
            className="text-xl text-center pt-4
           text-gray-300 "
          >
            امید باکری
          </div>
          <div className="text-lg text-center pt-4 text-gray-400 ">
            برنامه نویس Front End و دانشجوی مهندسی کامپیوتر
          </div>
          <div className="text-lg leading-8 mt-10 text-gray-300">
            برنامه جهانگرد برنامه ای کاربردی است که توسط React ساخته شده است و می
            توانید جاهای مختلف دنیا را برای سفر بررسی کنید آن ها را ذخیره کنید و
            شهر های مختلف و اطلاعاتی که دارن را روی نقشه ببینید.
          </div>
          <div
            className="mt-10 flex 
          justify-between gap-3 items-center bg-gray-600 rounded-lg p-4"
          >
            <div className="flex items-end gap-3 justify-start">
              <i className="text-3xl text-gray-300">
                <FaGithub />
              </i>
              <a
                href="https://github.com/omid-bakeri"
                target="_blank"
                className="text-gray-300
               text-lg hover:text-gray-400 hover:duration-500"
                rel="noreferrer"
              >
                https://github.com/omid-bakeri
              </a>
            </div>
          </div>
          <div
            className="mt-2 flex 
          justify-between gap-3 items-center bg-gray-600 rounded-lg p-4"
          >
            <div className="flex items-end gap-3 justify-start">
              <i className="text-3xl text-gray-300">
                <FaGoogle />
              </i>
              <a
                href="#"
                target="_blank"
                className="text-gray-300
               text-lg hover:text-gray-400 hover:duration-500"
                rel="noreferrer"
              >
                Robert.minia01@gmail.com
              </a>
            </div>
          </div>
          <div className="text-lg text-gray-300 mt-10">سایر پروژه های بنده</div>

          <div
            className="text-gray-300 text-xl bg-gray-600 rounded-lg
          mt-6 p-4"
          >
            <h2>1 - پروژه فیلم نگار</h2>
            <h5 className="text-gray-400 text-lg mt-4 leading-8">
              فیلم نگار یک وب اپلیکیشن هوشمند است که شما می توانید هر فیلم یا
              سریالی را که می خواهید سرچ کنید و اطلاعات جامعی در مورد آن کسب
              کنید می توانید فیلم مد نظر خود را در فیلم های مورد علاقه و ذخیره
              شده خود قرار دهید و لیستی جذاب از فیلم و سریال خود داشته باشید می
              توانید اطلاعات را در سایت معروف imdb هم مشاهده بفرمایید.
            </h5>
            <div className="flex justify-start gap-4 items-center">
              <div
                className="mt-3 hover:bg-[#61dbfb]
               hover:duration-500 hover:translate-y-1 
            hover:cursor-pointer flex justify-start 
            items-center gap-3 bg-slate-500 w-32
             px-4 py-2 rounded-r-full rounded-l-full"
              >
                <i className="text-2xl">
                  <FaReact />
                </i>
                <p className="text-xl">React</p>
              </div>
              <div
                className="mt-3 hover:bg-[#e34c26]
               hover:duration-500 hover:translate-y-1 
            hover:cursor-pointer flex justify-start 
            items-center gap-3 bg-slate-500 w-32
             px-4 py-2 rounded-r-full rounded-l-full"
              >
                <i className="text-2xl">
                  <FaHtml5 />
                </i>
                <p className="text-xl">Html5</p>
              </div>
              <div
                className="mt-3 hover:bg-[#264de4]
               hover:duration-500 hover:translate-y-1 
            hover:cursor-pointer flex justify-start 
            items-center gap-3 bg-slate-500 w-32
             px-4 py-2 rounded-r-full rounded-l-full"
              >
                <i className="text-2xl">
                  <FaCss3 />
                </i>
                <p className="text-xl">Css3</p>
              </div>
            </div>
            <div className="text-xl mt-10 mb-6">تصاویری از برنامه</div>
            <img
              className="rounded-lg mb-6 shadow-lg"
              src="../../public/assets/images/2023-08-28 12_03_16-فیلم نگار.png"
            />
          </div>
          <div
            className="text-gray-300 text-xl bg-gray-600 rounded-lg
          mt-6 p-4"
          >
            <h2>2 - امید ترانسلیت</h2>
            <h5 className="text-gray-400 text-lg mt-4 leading-8">
              مترجم امید یک وب سرویس بسیار قدرتمند برای ترجمه متون و کلمات
              انگلیسی به فارسی و فارسی به انگلیسی است که می توانید از آن استفاده
              کنید. این وب سرویس به صورت خودکار کار ترجمه را انجام می دهد…
            </h5>
            <div className="flex justify-start gap-4 items-center">
              <div
                className="mt-3 hover:bg-[#F0DB4F]
               hover:duration-500 hover:translate-y-1 
            hover:cursor-pointer flex justify-start 
            items-center gap-3 bg-slate-500 w-42
             px-4 py-2 rounded-r-full rounded-l-full"
              >
                <i className="text-2xl">
                  <FaJs />
                </i>
                <p className="text-xl">Javascript</p>
              </div>
              <div
                className="mt-3 hover:bg-[#e34c26]
               hover:duration-500 hover:translate-y-1 
            hover:cursor-pointer flex justify-start 
            items-center gap-3 bg-slate-500 w-32
             px-4 py-2 rounded-r-full rounded-l-full"
              >
                <i className="text-2xl">
                  <FaHtml5 />
                </i>
                <p className="text-xl">Html5</p>
              </div>
              <div
                className="mt-3 hover:bg-[#264de4]
               hover:duration-500 hover:translate-y-1 
            hover:cursor-pointer flex justify-start 
            items-center gap-3 bg-slate-500 w-32
             px-4 py-2 rounded-r-full rounded-l-full"
              >
                <i className="text-2xl">
                  <FaCss3 />
                </i>
                <p className="text-xl">Css3</p>
              </div>
            </div>
            <div className="text-xl mt-10 mb-6">تصاویری از برنامه</div>
            <img
              className="rounded-lg mb-6 shadow-lg"
              src="../../public/assets/images/transLight.png"
            />
            <img
              className="rounded-lg mb-6 shadow-lg"
              src="../../public/assets/images/transDark.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
