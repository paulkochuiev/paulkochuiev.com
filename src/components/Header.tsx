import NavBar from "./NavBar";
import MobileNav from "./MobileNav";

const Header = () => (
  <header className="sticky top-0 z-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-3 sm:pt-4 pb-2">
      <div className="hidden max-w-full rounded-full border border-white/40 bg-white/40 px-1.5 py-1.5 shadow-lg shadow-black/5 backdrop-blur-md lg:inline-flex">
        <NavBar />
      </div>
      <MobileNav />
    </div>
  </header>
);

export default Header;
