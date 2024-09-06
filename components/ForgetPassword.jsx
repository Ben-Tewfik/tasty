import { useGlobalContext } from "@/contexts/RecipesContext";
import { FaTimes } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function ForgetPassword() {
  const { openForgetPassword, setOpenSignIn, setOpenForgetPassword } =
    useGlobalContext();
  // function to openSignIn and close forgetPassword
  function handleSignIn() {
    setOpenSignIn(true);
    setOpenForgetPassword(false);
  }
  return (
    <section
      className={`${
        openForgetPassword ? "block" : "hidden"
      } fixed flex items-center justify-center bg-black bg-opacity-80 top-0 left-0 right-0 bottom-0 z-50 h-screen overflow-y-hidden`}
    >
      <div className="bg-white relative rounded-sm w-[90vw] max-w-[500px] overflow-visible">
        <FaTimes
          onClick={() => setOpenForgetPassword(false)}
          className="text-2xl cursor-pointer hover:text-red transition-colors duration-300 absolute right-2 top-2"
        />
        {/* title */}

        <h1 className="text-center font-bold text-2xl pt-10 mb-6">
          Reset Password
        </h1>

        {/* form */}
        <form className="flex flex-col gap-2 px-14">
          <label htmlFor="email" className="block uppercase text-sm text-dark">
            your email
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="name@email.com"
            className="block border-grey w-full focus:border-dark px-2 mb-4 py-1 rounded outline-none border-2"
          />
          <button className="w-full py-2 mb-8 rounded-md capitalize bg-red text-white">
            submit
          </button>
        </form>
        <div className="bg-grey py-7 flex justify-center">
          <button
            className="text-red flex items-center justify-center cursor-pointer capitalize"
            onClick={handleSignIn}
          >
            <MdOutlineKeyboardArrowLeft className="font-extrabold" />
            back to login
          </button>
        </div>
      </div>
    </section>
  );
}
