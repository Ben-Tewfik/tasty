import { useGlobalContext } from "@/contexts/RecipesContext";
import { FaTimes, FaCheck } from "react-icons/fa";
import { Pacifico } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";
import { auth } from "@/utils/firebase-config";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});
export default function SignIn() {
  const {
    openSignIn,
    setOpenSignIn,
    setOpenSignUp,
    setOpenForgetPassword,
    signIn,
  } = useGlobalContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
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
  // signIn function
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const persistenceType = rememberMe
        ? browserLocalPersistence
        : browserSessionPersistence;
      await setPersistence(auth, persistenceType);
      await signIn(email, password);
      router.push("/profile");
      setOpenSignIn(false);
    } catch (error) {
      console.log(error.message);

      setError("Failed to Sign In User Does not exist");
    } finally {
      setLoading(false);
    }
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
        <form className="flex flex-col gap-2 px-14" onSubmit={handleSubmit}>
          {error && (
            <p className="text-red font-semibold text-center capitalize mb-2 bg-pink py-2 w-full rounded transition-all duration-300 mx-auto">
              {error}
            </p>
          )}
          <label htmlFor="email" className="block uppercase text-sm text-dark">
            email address
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="name@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="block border-grey w-full focus:border-dark px-2 py-1 rounded outline-none border-2"
          />
          <label htmlFor="password" className="block uppercase text-sm">
            password
          </label>
          <input
            type="password"
            id="password"
            placeholder="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="block border-grey w-full focus:border-dark px-2 py-1 rounded outline-none border-2"
          />
          <div className="flex justify-between mt-2 mb-4">
            <label
              htmlFor="checkbox"
              className="flex items-center justify-center gap-2"
            >
              <div className="relative flex">
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={rememberMe}
                  className="appearance-none w-4 h-4 border-2 rounded-md border-red"
                  onChange={e => setRememberMe(e.target.checked)}
                />
                <FaCheck
                  className={`text-red text-[12px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition duration-150 ${
                    rememberMe ? "text-opacity-100" : "text-opacity-0"
                  }`}
                />
              </div>
              Remember me
            </label>

            <button
              className="text-red cursor-pointer"
              onClick={handleForgetPassword}
            >
              Forgot password?
            </button>
          </div>
          <button
            className={`${
              loading ? "opacity-50" : null
            } w-full py-2 mb-8 rounded-md capitalize bg-red text-white`}
          >
            {loading ? (
              <div className="border-2 mx-auto animate-spin  border-transparent border-t-white rounded-full w-6 h-6"></div>
            ) : (
              "login"
            )}
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
