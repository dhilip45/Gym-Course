const CourseDetails = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200"
          alt="course"
          className="w-full rounded-3xl mb-8"
        />

        <h1 className="text-5xl font-bold mb-6">
          Muscle Building Mastery
        </h1>

        <p className="text-gray-400 mb-6">
          Complete step-by-step muscle building program with
          workouts, nutrition plans, and progress tracking.
        </p>

        <div className="flex gap-4 mb-8">
          <span className="bg-yellow-500 text-black px-4 py-2 rounded-lg">
            ₹999
          </span>

          <span className="border border-white px-4 py-2 rounded-lg">
            12 Weeks
          </span>
        </div>

        <button className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold">
          Add To Cart
        </button>

      </div>
    </div>
  );
};

export default CourseDetails;