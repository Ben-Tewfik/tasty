import { useGlobalContext } from "@/contexts/RecipesContext";
import { FaTimes } from "react-icons/fa";
import { Pacifico } from "next/font/google";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});
export default function SignIn() {
  const { openSignIn, setOpenSignIn, setOpenSignUp, setOpenForgetPassword } =
    useGlobalContext();
  // function to open signUp and close signIn
  function handleSignUp() {
    setOpenSignIn(false);
    setOpenSignUp(true);
  }
  // function to open forget password and open signIn
  function handleForgetPassword() {
    setOpenSignIn(false);
    setOpenForgetPassword(true);
  }
  return (
    <section
      className={`${
        openSignIn ? "block" : "hidden"
      } fixed flex items-center justify-center bg-black bg-opacity-80 top-0 left-0 right-0 bottom-0 z-50 h-screen overflow-y-hidden`}
    >
      <div className="bg-white relative rounded-sm w-[90vw] max-w-[500px] overflow-visible">
        <FaTimes
          onClick={() => setOpenSignIn(false)}
          className="text-2xl cursor-pointer hover:text-red transition-colors duration-300 absolute right-2 top-2"
        />
        {/* title and logo */}
        <div className="flex flex-col gap-3 mb-4 pt-10">
          <h1 className="text-center font-bold text-2xl">Welcome back!</h1>
          <h3
            className={`${pacifico.className} text-3xl md:text-5xl text-red text-center`}
          >
            Tasty
          </h3>
        </div>
        {/* form */}
        <form className="flex flex-col gap-2 px-14">
          <label htmlFor="email" className="block uppercase text-sm text-dark">
            email address
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="name@email.com"
            className="block border-grey w-full focus:border-dark px-2 py-1 rounded outline-none border-2"
          />
          <label htmlFor="password" className="block uppercase text-sm">
            password
          </label>
          <input
            type="password"
            id="password"
            placeholder="password"
            className="block border-grey w-full focus:border-dark px-2 py-1 rounded outline-none border-2"
          />
          <div className="flex justify-between mt-2 mb-4">
            <div className="flex items-center justify-center gap-2">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <button
              className="text-red cursor-pointer"
              onClick={handleForgetPassword}
            >
              Forgot password?
            </button>
          </div>
          <button className="w-full py-2 mb-8 rounded-md capitalize bg-red text-white">
            login
          </button>
        </form>
        <div className="bg-grey py-7 text-center">
          <p>
            Dont&apos;t have an account?{" "}
            <button className="text-red cursor-pointer" onClick={handleSignUp}>
              Register
            </button>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
