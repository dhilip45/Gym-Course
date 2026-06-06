import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-black border-r border-white/10 p-6">

      <h2 className="text-4xl font-bold text-yellow-500 mb-10">
        GYMFLEX
      </h2>

      <div className="flex flex-col gap-5">

        <Link
          to="/dashboard"
          className="text-white hover:text-yellow-500 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/courses"
          className="text-white hover:text-yellow-500 transition"
        >
          My Courses
        </Link>

        <Link
          to="/certificates"
          className="text-white hover:text-yellow-500 transition"
        >
          Certificates
        </Link>

        <Link
          to="/settings"
          className="text-white hover:text-yellow-500 transition"
        >
          Settings
        </Link>

        <Link
          to="/profile"
          className="text-white hover:text-yellow-500 transition"
        >
          Profile
        </Link>

      </div>
    </aside>
  );
};

export default Sidebar;