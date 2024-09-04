export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url('/tasty-hero.jpg')`,
      }}
      className="flex flex-col justify-center items-center text-dark font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-x h-[50vh] bg-cover sm:h-[60vh] md:h-[70vh] lg:h-[91vh] bg-no-repeat bg-center"
    >
      <div className="flex flex-col items-end lg:gap-2">
        <h1>Your favorite food</h1>
        <h3>Make it good</h3>
      </div>
    </section>
  );
}
