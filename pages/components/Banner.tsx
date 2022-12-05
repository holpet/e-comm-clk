import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ProgressiveImage from "react-progressive-graceful-image";
import { useRouter } from "next/router";
import { getCategoryFromPath } from "../../src/lib/urlUtils";
import { useEffect, useState } from "react";
import {
  CATEGORY,
  NUM_PROMO_IMG_CATEGORY,
  NUM_PROMO_IMG_DEFAULT,
} from "../../src/lib/constants";

interface Props {
  category: boolean;
}

export default function Banner({ category }: Props) {
  const router = useRouter();
  const numOfBannerImages = category
    ? NUM_PROMO_IMG_CATEGORY
    : NUM_PROMO_IMG_DEFAULT;
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    if (
      !router.isReady ||
      router.query === undefined ||
      Object.keys(router.query).length === 0 // no query params (in dyn. routes)
    )
      return;
    const tagsArray = [
      router.query.primary_tag.toString(),
      router.query.secondary_tag.toString(),
    ];
    setCategoryName(getCategoryFromPath(tagsArray));
  }, [router.isReady, router.query]);

  return (
    <div className="relative flex justify-center items-center">
      {/* SPECIALS/CATEGORY LINK */}
      <div
        className={`absolute ${category ? "categorySpecials" : "specials"}`}
        onClick={() => !category && router.push("/specials")}
      >
        <span>{`${category ? categoryName : "SPECIALS"}`}</span>
      </div>

      {/* CAROUSEL BANNER */}
      <Carousel
        autoPlay={category ? false : true}
        interval={category ? 0 : 5000}
        infiniteLoop={category ? false : true}
        showStatus={false}
        showIndicators={false}
        showArrows={category ? false : true}
        showThumbs={false}
      >
        {Array(numOfBannerImages)
          .fill(0)
          .map((_, i) => (
            <div key={i} className={category ? "w-screen" : ""}>
              <ProgressiveImage
                src={
                  category
                    ? `/promo/category/${getPromoImg(
                        categoryName
                      )}_compressed.webp`
                    : `/promo/${i}.webp`
                }
                placeholder={
                  category
                    ? `/promo/category/${getPromoImg(
                        categoryName
                      )}_compressed.webp`
                    : `/promo/${i}_tiny.webp`
                }
              >
                {(src, loading) => (
                  <img
                    src={src}
                    alt={`carousel promo -${
                      category && " category -"
                    } image No. ${i}`}
                    className={`${
                      category ? "sm:h-52 h-32" : "sm:h-80 h-56"
                    } object-cover object-center w-full ${
                      i === 1 ? "contrast-75" : ""
                    }`}
                  />
                )}
              </ProgressiveImage>
            </div>
          ))}
      </Carousel>
    </div>
  );
}

const getPromoImg = (category: string) => {
  switch (category) {
    case CATEGORY.MEN_CLOTHING:
      return 0;
    case CATEGORY.WOMEN_CLOTHING:
      return 1;
    case CATEGORY.JEWELERY:
      return 2;
    case CATEGORY.ELECTRO:
      return 3;
    default:
      return 0;
  }
};
