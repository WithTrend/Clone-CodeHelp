/* eslint-disable react/prop-types */
export const Animatedbtn = (props) => {
  const { name } = props; // Destructure 'name' from props

  return (
    <button
      className="border-1 border-black px-4 py-2 rounded-lg  w-96 h-16 cursor-pointer
    shadow-xl  text-white font-bold"
      style={{ backgroundColor: "rgb(102, 116, 204)" }}
    >
      {name} {/* Render the dynamic name */}
    </button>
  );
};
