export default function Price({ price, hasPrime }) {
  return <p className={`text-lg ${!hasPrime && "mb-2"}`}>€{price}</p>;
}
