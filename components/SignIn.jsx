import { useGlobalContext } from "@/contexts/RecipesContext";
import { FaTimes } from "react-icons/fa";

export default function SignIn() {
  const { setIsOpen, isOpen } = useGlobalContext();
  return (
    <section
      className={`${
        isOpen ? "block" : "hidden"
      } fixed flex items-center justify-center bg-black bg-opacity-80 top-0 left-0 right-0 bottom-0 z-50 h-screen overflow-y-hidden`}
    >
      <div className="bg-white relative rounded-sm w-[90vw] max-w-[500px] h-[500px] overflow-visible">
        <FaTimes
          onClick={() => setIsOpen(false)}
          className="text-2xl cursor-pointer hover:text-red transition-colors duration-300 absolute right-2 top-2"
        />
      </div>
    </section>
  );
}
