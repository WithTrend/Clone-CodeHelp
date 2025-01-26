import { Animatedbtn } from "./Animatedbtn";

export const Herosection = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
        <div className=" p-3 text-center ">
          <p className="text-4xl">
            Crack the Code to<br></br> Success with CodeHelp
          </p>
          <br></br>
          <p className="text-gray-400 ">
            Elevate your programming skills, solve challenges, and unlock the
            world of coding possibilities.
          </p>
          <br></br>
          <button className="p-4 text-black border-1 cursor-pointer  rounded-md hover:border-0 hover:bg-red-600 hover:text-white font-bold">
            View Courses
          </button>
          &nbsp;&nbsp;&nbsp;
          <button>Watch Live</button>
        </div>
        <div className=" text-white p-4 text-center flex-col space-y-4 ">
          <Animatedbtn name="Quick Compiler" />
          <Animatedbtn name="Interview Experiences" />
          <Animatedbtn name="CORE CS Subjects" />
          <Animatedbtn name="Tutorials" />
        </div>
        <div className=" text-white p-4 text-center flex-col space-y-4 ">
          <Animatedbtn name="Mock Tests" />
          <Animatedbtn name="Free Web Dev" />
          <Animatedbtn name="Articles" />
          <Animatedbtn name="Dev Challenges" />
        </div>
      </div>
    </>
  );
};
