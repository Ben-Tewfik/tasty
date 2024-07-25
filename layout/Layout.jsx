import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Layout({ children }) {
  return (
    <main className={roboto.className}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
