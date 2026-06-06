import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Award,
  Settings,
  User,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">

      {/* Sidebar */}
      <aside className="w-72 bg-black border-r border-white/10 p-6">
        <h1 className="text-4xl font-extrabold text-yellow-500 mb-10">
          GYMFLEX
        </h1>

        <nav className="space-y-3">

          <Link
            to="/dashboard"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            to="/courses"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
          >
            <BookOpen size={20} />
            My Courses
          </Link>

          <Link
            to="/certificates"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
          >
            <Award size={20} />
            Certificates
          </Link>

          <Link
            to="/settings"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
          >
            <Settings size={20} />
            Settings
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
          >
            <User size={20} />
            Profile
          </Link>

        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">

        <h2 className="text-4xl font-bold mb-2">
          Welcome Back 👋
        </h2>

        <p className="text-gray-400 mb-10">
          Track your fitness journey and continue learning.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:scale-105 transition">
            <h3 className="text-yellow-500 text-lg">
              Enrolled Courses
            </h3>

            <p className="text-5xl font-bold mt-4">
              12
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:scale-105 transition">
            <h3 className="text-yellow-500 text-lg">
              Certificates Earned
            </h3>

            <p className="text-5xl font-bold mt-4">
              5
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:scale-105 transition">
            <h3 className="text-yellow-500 text-lg">
              Overall Progress
            </h3>

            <p className="text-5xl font-bold mt-4">
              78%
            </p>
          </div>

        </div>

        {/* Continue Learning */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Continue Learning
          </h3>

          <p className="text-gray-400 mb-4">
            Advanced Strength Training Course
          </p>

          <div className="w-full bg-zinc-800 h-4 rounded-full">
            <div className="w-3/4 h-4 bg-yellow-500 rounded-full"></div>
          </div>

          <p className="mt-3 text-yellow-500">
            75% Completed
          </p>
        </div>

        {/* Recent Activity */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-6">
            Recent Activity
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li>✅ Completed HIIT Workout Basics</li>
            <li>🏆 Earned Beginner Fitness Certificate</li>
            <li>📚 Started Advanced Strength Training</li>
            <li>🔥 Reached 30 Day Workout Streak</li>
          </ul>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;