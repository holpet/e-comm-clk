import { useRouter } from "next/router";
import { getPathFromCategory } from "../../../../src/lib/urlUtils";

export default function CategoryLink({ category }) {
  const router = useRouter();
  return (
    <p
      className="self-end text-xs italic text-gray-400 hover:underline hover:cursor-pointer"
      onClick={() => router.push(getPathFromCategory(category))}
    >
      {category}
    </p>
  );
}
