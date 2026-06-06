interface TrainerCardProps {
  name: string;
  role: string;
  experience: string;
  image: string;
}

const TrainerCard = ({
  name,
  role,
  experience,
  image,
}: TrainerCardProps) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />

      <h3 className="text-2xl font-bold">{name}</h3>

      <p className="text-yellow-500 mt-2">{role}</p>

      <p className="text-gray-400 mt-2">{experience}</p>
    </div>
  );
};

export default TrainerCard;