import Sidebar from "../../components/layout/Sidebar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">

      <Sidebar />

      <main className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Welcome Back 👋
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-yellow-500">
              Enrolled Courses
            </h3>

            <p className="text-5xl font-bold mt-4">
              12
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-yellow-500">
              Certificates
            </h3>

            <p className="text-5xl font-bold mt-4">
              5
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-yellow-500">
              Progress
            </h3>

            <p className="text-5xl font-bold mt-4">
              78%
            </p>
          </div>

        </div>

        <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-4">
            Continue Learning
          </h2>

          <p className="text-gray-400">
            Advanced Strength Training
          </p>

          <div className="w-full h-4 bg-zinc-800 rounded-full mt-5">
            <div className="w-3/4 h-4 bg-yellow-500 rounded-full"></div>
          </div>

          <p className="text-yellow-500 mt-3">
            75% Completed
          </p>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;