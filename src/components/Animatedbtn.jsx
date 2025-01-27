/* eslint-disable react/prop-types */
export const Animatedbtn = (props) => {
  const { name } = props;

  return (
    <button
      className="w-full max-w-xs sm:max-w-sm px-6 py-3  rounded-lg cursor-pointer
      shadow-xl text-white font-bold transition-all duration-300 hover:bg-indigo-700 hover:text-white"
      style={{ backgroundColor: "rgb(102, 116, 204)" }}
    >
      {name}
    </button>
  );
};
