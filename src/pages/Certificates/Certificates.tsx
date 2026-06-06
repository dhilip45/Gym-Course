const Certificates = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">

      <h1 className="text-5xl font-bold mb-10">
        Certificates
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-3xl font-bold text-yellow-500">
            Muscle Building Mastery
          </h2>

          <p className="mt-4 text-gray-400">
            Successfully Completed
          </p>

          <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold">
            Download Certificate
          </button>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-3xl font-bold text-yellow-500">
            Weight Loss Blueprint
          </h2>

          <p className="mt-4 text-gray-400">
            Successfully Completed
          </p>

          <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold">
            Download Certificate
          </button>

        </div>

      </div>

    </div>
  );
};

export default Certificates;