import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Banner() {
  return (
    <div className="flex justify-center items-center">
      <div className="absolute specials">
        <span>SPECIALS</span>
      </div>
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
              <img
                src={`promo/${i}.webp`}
                loading="lazy"
                alt={`carousel promo - image No. ${i}`}
                className={`sm:h-80 h-56 object-cover object-center ${
                  i === 1 ? "contrast-75" : ""
                }`}
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
}
