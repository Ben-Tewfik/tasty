import Image from "next/image";
import testimonial1 from "@/public/testimonial 1.jpg";
import { testimonials } from "@/utils/testimonials";
import { useState } from "react";
export default function Testimony() {
  const [position, setPosition] = useState(0);
  const { name, image, testimony } = testimonials[position];
  return (
    <section className="bg-grey py-7 relative">
      <div className="w-[90vw] max-w-[1170px] mx-auto">
        <h1 className="capitalize text-xl text-red font-semibold mb-7">
          testimony
        </h1>
        {/* image */}
        <div>
          <Image
            src={image}
            alt="testimonial image"
            width={100}
            height={100}
            className="block absolute right-7 -top-7 rounded-full w-52 h-52 object-cover"
          />
          <div className="flex gap-2 absolute right-[107px] bottom-16">
            {testimonials.map((testimonial, index) => {
              return (
                <div
                  key={testimonial.name}
                  className={`w-2 h-2 rounded-full cursor-pointer bg-pink ${
                    index === position ? "bg-red" : null
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-red capitalize">Hi, I&apos;m {name}</p>
          <p className="max-w-64">{testimony}</p>
        </div>
      </div>
    </section>
  );
}
