export const Card = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      {text && <p>{text}</p>}
    </div>
  );
};

export default Card;
