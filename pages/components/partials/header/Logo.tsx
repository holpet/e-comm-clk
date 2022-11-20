import Image from "next/image";
import { useRouter } from "next/router";

export default function Logo() {
  const router = useRouter();

  function handleOnClick() {
    router.push("/");
  }

  return (
    <div
      className="flex items-center mx-3 cursor-pointer"
      onClick={handleOnClick}
    >
      <Image
        className="mr-2"
        src="/logo/clk.png"
        alt="Clock Icon"
        width={70}
        height={70}
        priority={true}
      />
      <h1 className="uppercase text-mainBrown font-sansImpact text-xl font-bold">
        Clk<span className="text-mainGray">Shop</span>
      </h1>
    </div>
  );
}
