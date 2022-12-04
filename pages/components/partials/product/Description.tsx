export default function Description({ description, full }) {
  return (
    <p className={`${!full && "line-clamp-3"} text-xs my-2`}>{description}</p>
  );
}
