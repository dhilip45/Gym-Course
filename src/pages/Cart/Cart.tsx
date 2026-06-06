const Cart = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">
                  Muscle Building Mastery
                </h2>

                <p className="text-gray-400">
                  Premium Fitness Course
                </p>
              </div>

              <span className="text-yellow-500 text-xl font-bold">
                ₹999
              </span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">
                  Weight Loss Blueprint
                </h2>

                <p className="text-gray-400">
                  Premium Fitness Course
                </p>
              </div>

              <span className="text-yellow-500 text-xl font-bold">
                ₹1499
              </span>
            </div>

          </div>

          {/* Summary */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-fit">
            <h2 className="text-3xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span>₹2498</span>
            </div>

            <button className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold mt-6">
              Proceed To Checkout
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Cart;