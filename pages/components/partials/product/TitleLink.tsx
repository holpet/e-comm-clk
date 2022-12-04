import { useRouter } from "next/router";
import { getPathFromId } from "../../../../src/lib/urlUtils";

export default function TitleLink({ title, id, category }) {
  const router = useRouter();

  function handleOnClick() {
    router.push(getPathFromId(category, title, id));
  }

  return (
    <h4 className="mainLink font-semibold text-lg" onClick={handleOnClick}>
      {title}
    </h4>
  );
}
