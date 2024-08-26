import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Layout({ children }) {
  return (
    <main
      className={`${roboto.className}`}
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />
      <div style={{ flexGrow: "1" }}>{children}</div>
      <Footer />
    </main>
  );
}
