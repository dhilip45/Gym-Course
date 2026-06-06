const Profile = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">

      <div className="max-w-4xl mx-auto">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <div className="flex flex-col items-center">

            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="profile"
              className="w-32 h-32 rounded-full mb-6"
            />

            <h1 className="text-4xl font-bold">
              Dhilip
            </h1>

            <p className="text-gray-400 mt-2">
              Premium Member
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-zinc-900 rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold text-yellow-500">
                12
              </h3>
              <p>Courses</p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold text-yellow-500">
                5
              </h3>
              <p>Completed</p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold text-yellow-500">
                3
              </h3>
              <p>Certificates</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;