// components
import Signin from "./partials/header/Signin";
import SearchBar from "./partials/header/searchBar/SearchBar";
import Logo from "./partials/header/Logo";
import Cart from "./partials/header/Cart";
import Categories from "./partials/header/Categories";
import ThreeLinesMenu from "./partials/header/ThreeLinesMenu";

export default function HeaderMenu() {
  return (
    <div className="sticky z-50 top-0">
      <div className="flex items-center md:justify-evenly justify-between bg-white bg-opacity-90 font-sansArial">
        <Logo />
        <SearchBar />
        <div className="flex items-center mr-5">
          <ThreeLinesMenu />
          <Categories />
          <Signin />
          <Cart />
        </div>
      </div>
    </div>
  );
}
