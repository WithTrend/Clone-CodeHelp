import { Animatedbtn } from "./Animatedbtn";

export const Herosection = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Hero Text Section */}
        <div className="p-4 text-center sm:text-left">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Crack the Code to
            <br /> Success with CodeHelp
          </p>
          <p className="text-gray-400 mt-4 text-sm sm:text-base lg:text-lg">
            Elevate your programming skills, solve challenges, and unlock the
            world of coding possibilities.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center sm:justify-start">
            <button className="px-6 py-3 text-black border-1 cursor-pointer rounded-md hover:border-0 hover:bg-red-600 hover:text-white font-bold">
              View Courses
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-bold">
              Watch Live
            </button>
          </div>
        </div>

        {/* Button Section 1 */}
        <div className="text-white p-4 text-center flex flex-col items-center sm:items-start space-y-4">
          <Animatedbtn name="Quick Compiler" />
          <Animatedbtn name="Interview Experiences" />
          <Animatedbtn name="CORE CS Subjects" />
          <Animatedbtn name="Tutorials" />
        </div>

        {/* Button Section 2 */}
        <div className="text-white p-4 text-center flex flex-col items-center sm:items-start space-y-4">
          <Animatedbtn name="Mock Tests" />
          <Animatedbtn name="Free Web Dev" />
          <Animatedbtn name="Articles" />
          <Animatedbtn name="Dev Challenges" />
        </div>
      </div>
    </>
  );
};
