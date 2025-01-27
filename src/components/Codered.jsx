export const Codered = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-center p-6 md:p-18 my-8 md:my-16 border border-green-200">
      {/* Left Section */}
      <div className="p-3 text-center md:text-left">
        <button className="border bg-red-400 p-2 rounded-lg text-white mb-4">
          Stay Tuned
        </button>
        <h1 className="text-2xl md:text-4xl font-extrabold leading-[2rem] md:leading-[3rem] mt-4">
          CodeHelp <span className="text-red-600 font-extrabold">RED</span> is
          Coming
        </h1>
        <h3 className="text-sm md:text-md text-gray-400 leading-[2rem] md:leading-[3rem] mt-4">
          Get ready for our most powerful learning experience yet, its time to
          go RED
        </h3>
        <button className="border bg-red-500 rounded-md text-white font-extrabold p-3 mt-6">
          🔔&nbsp; Notify Me
        </button>
      </div>

      {/* Right Section */}
      <div className="h-36 w-36 md:h-48 md:w-48 flex items-center justify-center border border-green-200 mt-6 md:mt-0">
        <h1 className="text-center text-lg md:text-2xl font-bold">
          CodeHelp RED
        </h1>
      </div>
    </div>
  );
};
