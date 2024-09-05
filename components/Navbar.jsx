import { FaSearch } from "react-icons/fa";
import { Pacifico } from "next/font/google";
import Link from "next/link";
import { useGlobalContext } from "@/contexts/RecipesContext";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/router";
import { useState } from "react";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Navbar() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/meals?search=${search}`);
  }
  return (
    <nav className="h-16 shadow-md">
      <div className="w-[90vw] py-4 h-full max-w-[1170px] mx-auto flex justify-between gap-5 items-center">
        {/* logo */}
        <Link
          href={"/"}
          className={`${pacifico.className} z-50 text-3xl md:text-5xl text-red text-center`}
        >
          Tasty
        </Link>
        {/* form search */}
        <form
          className="relative md:grow-1 md:basis-1/3"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Find Recipe"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border-grey w-full focus:border-dark px-2 py-1 rounded outline-none border-2"
          />
          <button className="absolute top-1/2 right-2 -translate-y-1/2">
            <FaSearch className="text-red" />
          </button>
        </form>
        {/* social links or dark mode folder or login */}
        <button className="text-dark md:shadow-md md:bg-red md:rounded-md md:text-white py-1 px-3 flex items-center justify-center gap-2 hover:text-red md:hover:bg-white transition-all duration-300">
          <FaRegUser />
          <span className="hidden md:block md:font-semibold">Login</span>
        </button>
      </div>
    </nav>
  );
}
