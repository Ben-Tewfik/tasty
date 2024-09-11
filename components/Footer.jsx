import { Pacifico } from "next/font/google";
import Link from "next/link";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Footer() {
  return (
    <footer className="bg-pink rounded-tl-3xl rounded-tr-3xl">
      <div className="w-[90vw] mx-auto max-w-[1170px] p-5">
        {/* logo */}
        <Link
          href={"/"}
          className={`${pacifico.className} text-3xl md:text-5xl block text-dark text-center`}
        >
          Tasty
        </Link>
        <p className="text-center mt-5 font-semibold text-sm">
          Copyright &copy; {new Date().getFullYear()} Tasty All rights reserved
        </p>
      </div>
    </footer>
  );
}
