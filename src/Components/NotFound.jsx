import { NavLink } from "react-router-dom";
function NotFound() {
  return (
    <>
      <img
        className="w-[900px]"
        src="../../public/assets/images/404-error-404-not-6016x3384-9410-removebg-preview.png"
      />
      <div className="text-black font-bold text-3xl ">
        صفحه مورد نظر شما پیدا نشد :({" "}
      </div>
      <div className="text-gray-400 pt-6 font-small font-bold text-xl ">
        کاربر گرامی ممکن است آدرس صفحه مد نظر را اشتباه وارد کرده باشید یا آدرس
        حذف شده باشد.
      </div>
      <NavLink to="/">
        <button
          className="text-orange-700 px-6 py-3 text-xl 
      rounded-r-full rounded-l-full mt-6 border
       border-[2px]  border-orange-800"
        >
          برگشت به صفحه اصلی
        </button>
      </NavLink>
    </>
  );
}

export default NotFound;
