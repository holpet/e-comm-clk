// components
import Signin from "./partials/header/Signin";
import SearchBar from "./partials/header/SearchBar";
import Logo from "./partials/header/Logo";
import Cart from "./partials/header/Cart";
import Categories from "./partials/header/Categories";

export default function HeaderMenu({ products }) {
  return (
    <div className="sticky z-50 top-0">
      <div className="flex items-center md:justify-evenly justify-between bg-white bg-opacity-90 font-sansArial">
        <Logo />
        <SearchBar />
        <div className="flex items-center mr-5">
          <Categories products={products} />
          <Signin />
          <Cart />
        </div>
      </div>
    </div>
  );
}
