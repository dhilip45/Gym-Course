
import CourseCard from "../components/cards/CourseCard";
import { courses } from "../data/courses";
import TrainerCard from "../components/cards/TrainerCard";
import { trainers } from "../data/trainers";
import TestimonialCard from "../components/cards/TestimonialCard";
import { testimonials } from "../data/testimonials";
const Home = () => {
  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
<section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden"
>
  {/* Background Image */}
  <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl" />

<div className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl" />
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600')",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70" />

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
    <p className="text-yellow-500 uppercase tracking-widest mb-4 mt-8">
      Premium Fitness Platform
    </p>

    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
      Transform Your
      <span className="text-yellow-500"> Body </span>
      <br />
      Transform Your Life
    </h1>

    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
      Join thousands of fitness enthusiasts and learn from expert trainers
      through premium online courses.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition">
        Explore Courses
      </button>

      <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
        Join Now
      </button>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl">
        <h3 className="text-3xl font-bold text-yellow-500">50K+</h3>
        <p className="text-gray-300">Active Members</p>
      </div>

      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl">
        <h3 className="text-3xl font-bold text-yellow-500">200+</h3>
        <p className="text-gray-300">Fitness Courses</p>
      </div>

      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl">
        <h3 className="text-3xl font-bold text-yellow-500">95%</h3>
        <p className="text-gray-300">Success Rate</p>
      </div>
    </div>
  </div>
</section>

      {/* About */}
      <section
  id="about"
  className="min-h-screen flex items-center bg-zinc-950 px-6"
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    <div>
      <img
        src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900"
        alt="gym"
        className="rounded-3xl"
      />
    </div>

    <div>
      <p className="text-yellow-500 uppercase mb-3">
        About Us
      </p>

      <h2 className="text-5xl font-bold mb-6">
        Elevate Your Fitness Journey
      </h2>

      <p className="text-gray-400 mb-6">
        We provide world-class fitness education, expert trainers,
        and personalized workout programs designed to help you
        achieve your goals faster.
      </p>

      <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold">
        Learn More
      </button>
    </div>

  </div>
</section>

      {/* Featured Courses */}
<section
  id="courses"
  className="min-h-screen bg-black px-6 py-20 flex items-center"
>
  <div className="max-w-7xl mx-auto w-full">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white">
        Featured Courses
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          description={course.description}
          image={course.image}
          price={course.price}
        />
      ))}
    </div>

  </div>
</section>

      {/* Trainers */}
      <section
  id="trainers"
  className="min-h-screen bg-zinc-950 px-6 py-20 flex items-center"
>
  <div className="max-w-7xl mx-auto w-full">

    <div className="text-center mb-16">
      <p className="text-yellow-500 uppercase">
        Meet Our Team
      </p>

      <h2 className="text-5xl font-bold text-white mt-4">
        Expert Trainers
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {trainers.map((trainer) => (
        <TrainerCard
          key={trainer.id}
          name={trainer.name}
          role={trainer.role}
          experience={trainer.experience}
          image={trainer.image}
        />
      ))}
    </div>

  </div>
</section>
      {/* Success Stories */}
      <section
  id="success"
  className="min-h-screen bg-black px-6 py-20 flex items-center"
>
  <div className="max-w-7xl mx-auto w-full">

    <div className="text-center mb-16">
      <p className="text-yellow-500 uppercase">
        Success Stories
      </p>

      <h2 className="text-5xl font-bold text-white mt-4">
        Real Transformations
      </h2>

      <p className="text-gray-400 mt-4">
        Thousands of students achieved their fitness goals.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((item) => (
       <TestimonialCard
  key={item.id}
  name={item.name}
  result={item.result}
  review={item.review}
  image={item.image}
/>
      ))}
    </div>

  </div>
</section>
      {/* Membership Plans */}
      <section
  id="plans"
  className="min-h-screen bg-zinc-950 px-6 py-20 flex items-center"
>
  <div className="max-w-7xl mx-auto w-full">

    <div className="text-center mb-16">
      <p className="text-yellow-500 uppercase">
        Membership Plans
      </p>

      <h2 className="text-5xl font-bold text-white mt-4">
        Choose Your Plan
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
        <h3 className="text-3xl font-bold text-white">
          Basic
        </h3>

        <p className="text-yellow-500 text-4xl mt-4">
          ₹999
        </p>

        <ul className="mt-6 space-y-3 text-gray-400">
          <li>5 Courses</li>
          <li>Community Access</li>
          <li>Email Support</li>
        </ul>
      </div>

      <div className="bg-yellow-500 text-black rounded-3xl p-8 text-center scale-105">
        <h3 className="text-3xl font-bold">
          Premium
        </h3>

        <p className="text-4xl mt-4">
          ₹1999
        </p>

        <ul className="mt-6 space-y-3">
          <li>All Courses</li>
          <li>Trainer Support</li>
          <li>Certificates</li>
        </ul>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
        <h3 className="text-3xl font-bold text-white">
          Elite
        </h3>

        <p className="text-yellow-500 text-4xl mt-4">
          ₹2999
        </p>

        <ul className="mt-6 space-y-3 text-gray-400">
          <li>All Premium Features</li>
          <li>1-on-1 Coaching</li>
          <li>Priority Support</li>
        </ul>
      </div>

    </div>

  </div>
</section>

      {/* Workout Categories */}
      <section
  id="categories"
  className="min-h-screen bg-black px-6 py-20 flex items-center"
>
  <div className="max-w-7xl mx-auto w-full">
    <div className="text-center mb-16">
      <p className="text-yellow-500 uppercase">
        Workout Categories
      </p>

      <h2 className="text-5xl font-bold text-white mt-4">
        Find Your Perfect Program
      </h2>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        "Weight Loss",
        "Muscle Building",
        "Yoga",
        "Strength Training",
      ].map((category) => (
        <div
          key={category}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition"
        >
          <h3 className="text-2xl font-bold text-white">
            {category}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FAQ */}
      <section
  id="faq"
  className="min-h-screen bg-zinc-950 px-6 py-20 flex items-center"
>
  <div className="max-w-4xl mx-auto w-full">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white">
        Frequently Asked Questions
      </h2>
    </div>

    <div className="space-y-6">
      <div className="bg-white/5 p-6 rounded-2xl">
        <h3 className="font-bold text-xl">
          How do I access courses?
        </h3>
        <p className="text-gray-400 mt-2">
          After purchase, courses will be available in My Courses.
        </p>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl">
        <h3 className="font-bold text-xl">
          Do I get certificates?
        </h3>
        <p className="text-gray-400 mt-2">
          Yes, certificates are awarded after course completion.
        </p>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl">
        <h3 className="font-bold text-xl">
          Can I learn on mobile?
        </h3>
        <p className="text-gray-400 mt-2">
          Yes, all courses are mobile-friendly.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Contact */}
      <section
  id="contact"
  className="min-h-screen bg-black px-6 py-20 flex items-center"
>
  <div className="max-w-4xl mx-auto w-full text-center">
    <p className="text-yellow-500 uppercase">
      Contact Us
    </p>

    <h2 className="text-5xl font-bold text-white mt-4">
      Start Your Fitness Journey Today
    </h2>

    <p className="text-gray-400 mt-6">
      Have questions? Reach out to our team anytime.
    </p>

    <div className="mt-10 space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
      />

      <textarea
        rows={5}
        placeholder="Your Message"
        className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
      />

      <button className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold">
        Send Message
      </button>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;