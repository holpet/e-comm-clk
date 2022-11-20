// components
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HeaderAdvert() {
  return (
    <Carousel
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      showStatus={false}
      showIndicators={false}
      stopOnHover={false}
      showArrows={false}
      showThumbs={false}
      className="bg-gradient-to-r from-mainWhiteGray via-mainLighterGray to-mainBrown p-1 sm:p-2 text-sm sm:font-medium"
    >
      <div className="tracking-wider">
        <p>Shop online 24/7</p>
      </div>
      <div className="tracking-wider">
        <p>Free delivery on orders above €50</p>
      </div>
      <div className="tracking-wider">
        <p>Extended warranty and money back guarantee</p>
      </div>
    </Carousel>
  );
}
