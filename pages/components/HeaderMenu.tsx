// components
import Signin from "./partials/header/Signin";
import SearchBar from "./partials/header/SearchBar";
import Logo from "./partials/header/Logo";
import Cart from "./partials/header/Cart";

export default function HeaderMenu() {
  return (
    <div className="sticky z-50 top-0">
      <div className="flex items-center md:justify-evenly justify-between bg-white bg-opacity-90 font-sansArial">
        <Logo />
        <SearchBar />
        <div className="flex items-center mr-5">
          <Signin />
          <Cart />
        </div>
      </div>
    </div>
  );
}
