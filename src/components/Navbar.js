import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#4B3E2F] text-white px-4 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#FFB84C]">
          🍴 Carol's
        </Link>
        <div className="space-x-4 hidden md:block">
          <Link to="/" className="hover:text-[#FFB84C]">Menu</Link>
          <Link to="/reservation" className="hover:text-[#FFB84C]">Reservation</Link>
        </div>
        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu.classList.toggle("hidden");
            }}
            className="focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div id="mobile-menu" className="md:hidden hidden px-4 pt-2 pb-4 bg-[#4B3E2F] space-y-2">
        <Link to="/" className="block hover:text-[#FFB84C]">Menu</Link>
        <Link to="/reservation" className="block hover:text-[#FFB84C]">Reservation</Link>
      </div>
    </nav>
  );
};

export default Navbar;