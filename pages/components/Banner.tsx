import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ProgressiveImage from "react-progressive-graceful-image";
import { useRouter } from "next/router";

export default function Banner() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center">
      {/* SPECIALS LINK */}
      <div
        className="absolute specials"
        onClick={() => router.push("/specials")}
      >
        <span>SPECIALS</span>
      </div>

      {/* CAROUSEL BANNER */}
      <Carousel
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        showThumbs={false}
      >
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i}>
              <ProgressiveImage
                src={`promo/${i}.webp`}
                placeholder={`promo/${i}_tiny.webp`}
              >
                {(src, loading) => (
                  <img
                    src={src}
                    alt={`carousel promo - image No. ${i}`}
                    className={`sm:h-80 h-56 object-cover object-center ${
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
