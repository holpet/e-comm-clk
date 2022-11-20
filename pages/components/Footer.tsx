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
    <footer className="text-center bottom-0 w-full mt-10 bg-gradient-to-r from-mainBrown via-mainLighterGray to-mainWhiteGray p-1 sm:p-2 text-sm sm:font-medium">
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-5 sm:gap-10 md:gap-20 lg:gap-32 m-3 text-xs">
          <div className="text-left p-3">
            <p className="font-bold pt-2 pb-4">MAY WE HELP YOU?</p>
            <p className="footerLink">FAQs</p>
            <p className="footerLink">Contact Us</p>
            <p className="footerLink">Email Unsubscribe</p>
            <p className="footerLink">Payment Options</p>
            <p className="footerLink">Shipping Services</p>
            <p className="footerLink">Returns & Exchanges</p>
            <p className="footerLink">Sitemap</p>
          </div>
          <div className="text-left p-3">
            <p className="font-bold pt-2 pb-4">THE COMPANY</p>
            <p className="footerLink">About CLK</p>
            <p className="footerLink">Legal</p>
            <p className="footerLink">Careers</p>
            <p className="footerLink">Privacy Policy</p>
            <p className="footerLink">Corporate Information</p>
          </div>
          <div className="text-left p-3">
            <p className="font-bold pt-2 pb-4">FIND US ON</p>
            <p className="footerLink">
              <FontAwesomeIcon icon={faTwitter} className="pr-1" />
              Twitter
            </p>
            <p className="footerLink">
              <FontAwesomeIcon icon={faFacebook} className="pr-1" />
              Facebook
            </p>
            <p className="footerLink">
              <FontAwesomeIcon icon={faInstagram} className="pr-1" />
              Instagram
            </p>
            <p className="footerLink">
              <FontAwesomeIcon icon={faYoutube} className="pr-1" />
              Youtube
            </p>
            <p className="footerLink">
              <FontAwesomeIcon icon={faPinterest} className="pr-1" />
              Pinterest
            </p>
          </div>
        </div>
      </div>

      <p className="m-4">Copyright CLK @ {currentYear}</p>
    </footer>
  );
}
