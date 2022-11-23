import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer text-center bottom-0 w-full mt-10 bg-gradient-to-r from-mainBrown via-mainLighterGray to-mainWhiteGray p-1 sm:p-2 text-sm sm:font-medium">
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-5 sm:gap-10 md:gap-20 lg:gap-32 m-3 text-xs">
          <div className="text-left p-3">
            <p className="font-bold pt-2 pb-4">MAY WE HELP YOU?</p>
            <p className="mainLink">FAQs</p>
            <p className="mainLink">Email Unsubscribe</p>
            <p className="mainLink">Contact Us</p>
            <p className="mainLink">Payment Options</p>
            <p className="mainLink">Shipping Services</p>
            <p className="mainLink">Returns & Exchanges</p>
            <p className="mainLink">Sitemap</p>
          </div>
          <div className="text-left p-3">
            <p className="font-bold pt-2 pb-4">THE COMPANY</p>
            <p className="mainLink">About CLK</p>
            <p className="mainLink">Legal</p>
            <p className="mainLink">Careers</p>
            <p className="mainLink">Privacy Policy</p>
            <p className="mainLink">Corporate Information</p>
          </div>
          <div className="text-left p-3">
            <p className="font-bold pt-2 pb-4">FIND US ON</p>
            <p className="mainLink">
              <FontAwesomeIcon icon={faTwitter} className="pr-1" />
              Twitter
            </p>
            <p className="mainLink">
              <FontAwesomeIcon icon={faFacebook} className="pr-1" />
              Facebook
            </p>
            <p className="mainLink">
              <FontAwesomeIcon icon={faInstagram} className="pr-1" />
              Instagram
            </p>
            <p className="mainLink">
              <FontAwesomeIcon icon={faYoutube} className="pr-1" />
              Youtube
            </p>
            <p className="mainLink">
              <FontAwesomeIcon icon={faPinterest} className="pr-1" />
              Pinterest
            </p>
          </div>
        </div>
      </div>

      <p className="my-4">Copyright CLK @ {currentYear}</p>
    </footer>
  );
}
