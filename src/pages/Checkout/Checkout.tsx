const Checkout = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Checkout
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Billing Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Billing Details
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl bg-black border border-white/10"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl bg-black border border-white/10"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl bg-black border border-white/10"
              />

            </div>

          </div>

          {/* Order Summary */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span>Muscle Building Mastery</span>
              <span>₹999</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Weight Loss Blueprint</span>
              <span>₹1499</span>
            </div>

            <hr className="border-white/10 my-6" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-yellow-500">
                ₹2498
              </span>
            </div>

            <button className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold mt-8">
              Complete Purchase
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Checkout;