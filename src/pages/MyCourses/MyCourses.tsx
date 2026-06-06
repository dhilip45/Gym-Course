const MyCourses = () => {
  const courses = [
    {
      title: "Muscle Building Mastery",
      progress: 70,
    },
    {
      title: "Weight Loss Blueprint",
      progress: 45,
    },
    {
      title: "Strength Training Pro",
      progress: 90,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold mb-10">
        My Courses
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <div
            key={course.title}
            className="bg-white/5 border border-white/10 rounded-3xl p-6"
          >
            <h2 className="text-2xl font-bold">
              {course.title}
            </h2>

            <p className="text-gray-400 mt-4">
              Progress: {course.progress}%
            </p>

            <div className="w-full h-3 bg-zinc-800 rounded-full mt-3">
              <div
                className="h-3 bg-yellow-500 rounded-full"
                style={{
                  width: `${course.progress}%`,
                }}
              />
            </div>

            <button className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded-xl font-bold">
              Continue Learning
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;