interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
}

const CourseCard = ({
  title,
  description,
  image,
  price,
}: CourseCardProps) => {
  return (
    <div className="
bg-white/5
backdrop-blur-md
border
border-white/10
rounded-3xl
overflow-hidden
hover:-translate-y-3
hover:border-yellow-500
hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]
transition-all
duration-500
">
      <img
        src={image}
        alt={title}
        className="h-60 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">
          {title}
        </h3>

        <p className="text-gray-400 mb-4">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-yellow-500 font-bold">
            {price}
          </span>

          <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;