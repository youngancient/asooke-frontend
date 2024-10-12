export const Button = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-[#38C947] rounded-full text-white"
    >
      {text}
    </button>
  );
};
