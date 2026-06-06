interface TestimonialCardProps {
  name: string;
  result: string;
  review: string;
  image: string;
}

const TestimonialCard = ({
  name,
  result,
  review,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-500"
      />

      <h3 className="text-2xl font-bold text-white">
        {name}
      </h3>

      <p className="text-yellow-500 mt-2">
        {result}
      </p>

      <p className="text-gray-400 mt-4">
        "{review}"
      </p>
    </div>
  );
};

export default TestimonialCard;