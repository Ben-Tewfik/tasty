export default function SectionTitle(props) {
  return (
    <h1 className="text-red text-center my-8 capitalize font-bold text-xl">
      {props.children}
    </h1>
  );
}
