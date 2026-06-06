import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-yellow-500"
        >
          FitPro
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-8 text-white">
          <Link to="/" className="hover:text-yellow-500 transition">
            Home
          </Link>

          <Link
            to="/courses"
            className="hover:text-yellow-500 transition"
          >
            Courses
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-yellow-500 transition"
          >
            Dashboard
          </Link>
        </div>

        {/* Login */}
        <Link
          to="/login"
          className="bg-yellow-500 text-black px-5 py-2 rounded-xl font-bold hover:scale-105 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;