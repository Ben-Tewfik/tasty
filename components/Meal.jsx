import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function Meal({ meal }) {
  console.log(meal);
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
  const instructions = strInstructions
    .split(".")
    .filter(item => item !== `${/[0-9]/gi}`);
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
                {instructions.map(item => {
                  return (
                    <li key={item} className="font-semibold py-2">
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
      {/* add comment section later*/}
      <section className="ml-8 md:ml-0 w-[90vw] mx-auto max-w-[1170px]">
        <h2 className="text-red capitalize font-bold text-xl mb-2">
          Ratings and Comments
        </h2>
      </section>
    </>
  );
}
