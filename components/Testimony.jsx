import Image from "next/image";
import { testimonials } from "@/utils/testimonials";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Testimony() {
  const [position, setPosition] = useState(0);
  const { name, image, testimony } = testimonials[position];
  // button navigation function
  function handleClick(index) {
    switch (index) {
      case 0:
        setPosition(0);
        break;
      case 1:
        setPosition(1);
        break;
      case 2:
        setPosition(2);
        break;
    }
  }
  return (
    <section className="bg-grey py-7 small:py-10 large:py-14 huge:py-20 relative">
      <div className="w-[90vw] max-w-[1170px] mx-auto">
        <h1 className="capitalize text-center smaller:text-left text-xl small:text-2xl medium:text-3xl text-red font-semibold mb-7">
          testimony
        </h1>
        {/* image */}
        <div>
          <Image
            src={image}
            alt="testimonial image"
            width={100}
            height={100}
            className="block mx-auto smaller:absolute smaller:mx-0 mb-4 right-5 small:right-16 medium:right-20 large:right-28 huge:right-56 -top-7 rounded-full w-52 h-52 huge:w-64 huge:h-64 object-cover"
          />
          <div className="flex gap-2 absolute right-1/2 translate-x-1/2 smaller:right-[100px] smaller:translate-x-0 small:right-[143px] medium:right-[157px] large:right-[187px] huge:right-[330px] bottom-4 smaller:bottom-6 huge:bottom-10">
            {testimonials.map((testimonial, index) => {
              return (
                <motion.div
                  key={testimonial.name}
                  className={`w-2 h-2 rounded-full cursor-pointer bg-pink ${
                    index === position ? "bg-red" : null
                  }`}
                  onClick={() => handleClick(index)}
                  whileHover={{ scale: 1.3 }}
                ></motion.div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col text-center smaller:text-left gap-2 mb-4">
          <p className="text-red capitalize">Hi, I&apos;m {name}</p>
          <p className="max-w-96 mx-auto smaller:mx-0 smaller:max-w-56 small:max-w-[340px] medium:max-w-[410px] large:max-w-full">
            {testimony}
          </p>
        </div>
      </div>
    </section>
  );
}
