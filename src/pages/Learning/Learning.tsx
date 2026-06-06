const Learning = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">

      <h1 className="text-5xl font-bold mb-10">
        Muscle Building Mastery
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2">
          <div className="aspect-video bg-zinc-900 rounded-3xl flex items-center justify-center">
            <h2 className="text-3xl">
              Course Video Area
            </h2>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

          <h3 className="text-2xl font-bold mb-6">
            Lessons
          </h3>

          <div className="space-y-4">

            <div className="p-4 bg-zinc-900 rounded-xl">
              Lesson 1 - Introduction
            </div>

            <div className="p-4 bg-zinc-900 rounded-xl">
              Lesson 2 - Nutrition
            </div>

            <div className="p-4 bg-zinc-900 rounded-xl">
              Lesson 3 - Workouts
            </div>

            <div className="p-4 bg-zinc-900 rounded-xl">
              Lesson 4 - Recovery
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Learning;