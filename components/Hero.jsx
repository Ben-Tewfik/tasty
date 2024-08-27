import Image from "next/image";
import tasty from "@/public/tasty-hero.jpg";
export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url('/tasty-hero.jpg')`,
      }}
      className="flex flex-col justify-center items-center text-dark font-bold text-3xl h-[50vh] bg-cover sm:h-[60vh] md:h-[70vh] lg:h-[91vh] bg-no-repeat bg-center"
    >
      <h1 className="">Your favorite food</h1>
      <h3 className="ml-16">Make it good</h3>
    </section>
  );
}
