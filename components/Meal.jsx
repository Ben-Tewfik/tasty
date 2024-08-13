import Image from "next/image";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
export default function Meal({ meal }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const {
    strMealThumb: img,
    strMeal: title,
    strCategory: category,
    strArea: area,
    strTags: tags,
    strInstructions,
  } = meal;
  const ingredientsArr = [];
  for (let i = 1; i <= 20; i++) {
    let ingredient = meal[`strIngredient${i}`];
    let measure = meal[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredientsArr.push(`${measure} ${ingredient}`);
    }
  }
  // array of instructions
  const instructions = strInstructions.split(".").filter(item => {
    if (item.search(/[0-9]/) === -1 && item !== " ") {
      return item;
    }
  });
  return (
    <>
      <section className="py-8 w-[90vw] mx-auto max-w-[1170px]">
        <div className="flex flex-col gap-4 md:gap-8 md:flex-row">
          <div className="relative w-96 lg:w-[450px] mx-auto h-96 lg:h-[450px] rounded-lg">
            <Image
              src={img}
              alt={`${title} Image`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="ml-8 flex flex-col gap-2 md:gap-4 md:flex-1">
            <h1 className="text-red font-bold text-3xl">{title}</h1>
            {category && (
              <h3>
                <span className="font-semibold">Category:</span> {category}
              </h3>
            )}
            {area && (
              <h3>
                <span className="font-semibold">Country:</span> {area}
              </h3>
            )}
            {tags && (
              <h3>
                <span className="font-semibold">Tags:</span> {tags}
              </h3>
            )}
          </div>
        </div>
      </section>
      <section className="bg-pink py-4 mb-8">
        <div className="w-[90vw] mx-auto max-w-[1170px] flex flex-col gap-4 sm:flex-row md:gap-8">
          {/* ingredients */}
          {ingredientsArr && (
            <div className="ml-8 md:ml-0 sm:flex-none">
              <h2 className="text-red capitalize font-bold text-xl mb-2">
                ingredients
              </h2>
              <ul className="marker:text-red ml-4 list-disc">
                {ingredientsArr.map(ingredient => {
                  return (
                    <li key={ingredient} className="font-semibold py-2">
                      {ingredient}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {/* description */}
          {instructions && (
            <div className="ml-8 md:ml-0 ">
              <h2 className="text-red capitalize font-bold text-xl mb-2">
                Directions
              </h2>
              <ul className="ml-4 list-disc marker:text-red">
                {instructions.map((item, index) => {
                  return (
                    <li key={`${item}${index}`} className="font-semibold py-2">
                      {item}
                    </li>
                  );
                })}
              </ul>
              <h3 className="text-3xl text-red mt-4 ">Serve and Enjoy !</h3>
            </div>
          )}
        </div>
      </section>
      {/* comment and rating section */}
      <section className="w-[90vw] mx-auto max-w-[1170px] mb-8">
        <form className="ml-8 md:ml-0">
          <h2 className="text-red capitalize font-bold text-xl mb-2">
            Ratings and Comments
          </h2>
          <p className="mb-2 text-gray-400">
            Please add a star rating before submitting your review
          </p>
          <h4 className="flex items-center mb-2 gap-2 text-red font-semibold">
            Tap to rate:{" "}
            <span className="flex">
              {Array.from("12345").map((item, index) => {
                const currentRating = index + 1;
                return (
                  <span
                    key={item}
                    onClick={() => setRating(currentRating)}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  >
                    {(rating || hover) > index ? (
                      <FaStar color="gold" />
                    ) : (
                      <FaRegStar color="gold" />
                    )}
                  </span>
                );
              })}
            </span>
          </h4>
          <label htmlFor="text" className="flex items-center gap-2 mb-3">
            <span className="bg-red rounded-full p-2">
              <IoCameraOutline className="text-white w-5 h-5" />
            </span>
            <input
              type="text"
              id="text"
              placeholder="Write your review here"
              className="border-grey border-2 pl-2 py-1 w-[350px]"
            />
          </label>
          <button
            type="submit"
            className="bg-red text-white px-2 py-1 block mx-auto sm:ml-36 sm:mx-0 rounded-sm"
          >
            Submit Review
          </button>
        </form>
      </section>
    </>
  );
}
