import { useGlobalContext } from "@/contexts/RecipesContext";
import { FaTimes } from "react-icons/fa";

export const SignUp = () => {
  const { openSignUp, setOpenSignUp, setOpenSignIn } = useGlobalContext();
  //   function to to open signIn and close signUp
  function handleSignIn() {
    setOpenSignUp(false);
    setOpenSignIn(true);
  }
  return (
    <section
      className={`${
        openSignUp ? "block" : "hidden"
      } fixed flex items-center justify-center bg-black bg-opacity-80 top-0 left-0 right-0 bottom-0 z-50 h-screen overflow-y-hidden`}
    >
      <div className="bg-white relative rounded-sm w-[90vw] max-w-[500px] overflow-visible">
        <FaTimes
          onClick={() => setOpenSignUp(false)}
          className="text-2xl cursor-pointer hover:text-red transition-colors duration-300 absolute right-2 top-2"
        />
        {/* title */}

        <h1 className="text-center font-bold mb-4 pt-10 text-2xl">
          Create an Account
        </h1>

        {/* form */}
        <form className="flex flex-col gap-4 px-14">
          <label htmlFor="name" className="block uppercase text-sm text-dark">
            your name
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="Name"
            className="block border-grey w-full focus:border-dark px-2 py-1 rounded outline-none border-2"
          />
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
          <label htmlFor="confirmPassword" className="block uppercase text-sm">
            confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="block border-grey w-full focus:border-dark px-2 py-1 rounded outline-none border-2"
          />

          <button className="w-full py-2 mb-8 rounded-md capitalize bg-red text-white">
            register
          </button>
        </form>
        <div className="bg-grey py-7 text-center">
          <p>
            Have an account?{" "}
            <button className="text-red cursor-pointer" onClick={handleSignIn}>
              Login
            </button>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};
