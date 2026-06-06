import CourseCard from "../../components/cards/CourseCard";
import { courses } from "../../data/courses";

const Courses = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12">
          All Courses
        </h1>

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
    </div>
  );
};

export default Courses;