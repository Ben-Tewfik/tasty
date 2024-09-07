import { useGlobalContext } from "@/contexts/RecipesContext";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export const SignUp = () => {
  const { openSignUp, setOpenSignUp, setOpenSignIn, signUp } =
    useGlobalContext();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // router
  const router = useRouter();

  //   function to to open signIn and close signUp
  function handleSignIn() {
    setOpenSignUp(false);
    setOpenSignIn(true);
  }
  // function for submit form
  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("passwords do not match");
    }

    if (name.trim() === "") {
      return setError("please enter your name");
    }
    if (email.trim() === "") {
      return setError("please enter your email");
    }
    if (password.trim() === "") {
      return setError("please enter your password");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(email, password);
      router.push("/dashboard");
      setOpenSignUp(false);
    } catch (error) {
      console.log(error);
      setError("user already exists");
    } finally {
      setLoading(false);
    }
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
        <form className="flex flex-col gap-4 px-14" onSubmit={handleSubmit}>
          {/* error handling */}
          {error && (
            <p className="text-red font-semibold text-center capitalize mb-2 bg-pink py-2 w-full rounded transition-all duration-300 mx-auto">
              {error}
            </p>
          )}
          <label htmlFor="name" className="block uppercase text-sm text-dark">
            your name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            className="block border-grey w-full focus:border-dark px-2 py-1 rounded outline-none border-2"
          />
          <label htmlFor="email" className="block uppercase text-sm text-dark">
            email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="block border-grey w-full focus:border-dark px-2 py-1 rounded outline-none border-2"
          />
          <label htmlFor="confirmPassword" className="block uppercase text-sm">
            confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className="block border-grey w-full focus:border-dark px-2 py-1 rounded outline-none border-2"
          />

          <button
            className={`${
              loading ? "opacity-50" : null
            } w-full py-2 mb-8 rounded-md capitalize bg-red text-white`}
          >
            {loading ? (
              <div className="border-2 mx-auto animate-spin  border-transparent border-t-white rounded-full w-6 h-6"></div>
            ) : (
              "register"
            )}
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
