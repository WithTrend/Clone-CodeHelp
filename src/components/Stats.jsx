/* eslint-disable react/prop-types */
export const Stats = () => {
  return (
    <div className="flex flex-wrap gap-8 p-8 justify-center border border-green-500 my-8 mx-4 items-center shadow-md shadow-blue-100 hover:scale-90 transition delay-150 duration-300 ease-in-out">
      <Statscomponent subscriber="1 M +" text="Subscribe on Youtube" />
      <Statscomponent subscriber="6 K +" text="Follow on Twitter" />
      <Statscomponent subscriber="135 K +" text="Follow on Instagram" />
      <Statscomponent subscriber="522 K +" text="Follow on Linkedin" />
    </div>
  );
};

export const Statscomponent = ({ subscriber, text }) => {
  return (
    <div
      className="p-4 h-28 w-64 rounded-md flex flex-col justify-center items-center bg-black text-white font-extrabold hover:scale-110 transition delay-150 duration-300 ease-in-out"
      style={{ backgroundColor: "rgb(102, 116, 204)" }}
    >
      <h1 className="text-xl">{subscriber}</h1>
      <p className="text-center text-sm">{text}</p>
    </div>
  );
};
