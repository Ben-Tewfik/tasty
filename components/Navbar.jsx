import { FaSearch } from "react-icons/fa";
import { Pacifico } from "next/font/google";
import Link from "next/link";
import { useGlobalContext } from "@/context/recipesContext";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Navbar() {
  return (
    <nav className="h-16 shadow-md">
      <div className="w-[90vw] py-4 h-full max-w-[1170px] mx-auto flex justify-between gap-5 items-center">
        {/* logo */}
        <Link
          href={"/"}
          className={`${pacifico.className} text-3xl md:text-5xl text-red text-center`}
        >
          Tasty
        </Link>
        {/* form search */}
        <form className="relative md:grow-1 md:basis-1/3">
          <input
            type="text"
            placeholder="Find Recipe"
            className="border-grey w-full focus:border-dark px-2 py-1 rounded outline-none border-2"
          />
          <button
            type="submit"
            className="absolute top-1/2 right-2 -translate-y-1/2"
          >
            <FaSearch className="text-red" />
          </button>
        </form>
        {/* social links or dark mode folder or login */}
        <button className="">login</button>
      </div>
    </nav>
  );
}
