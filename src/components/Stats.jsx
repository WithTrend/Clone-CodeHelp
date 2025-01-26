/* eslint-disable react/prop-types */
export const Stats = () => {
  return (
    <div className="flex gap-16 p-16 justify-around border-1 border-green my-16 mx-8 items-center shadow-md shadow-blue-100  hover:scale-90 transition delay-150 duration-300 ease-in-out  ">
      <Statscomponent subscriber="1 M +" text="Subscribe on Youtube" />
      <Statscomponent subscriber="6 K +" text="Follow on Twitter" />
      <Statscomponent subscriber="135 K +" text="Follow on Instagram" />
      <Statscomponent subscriber="522 K +" text="Follow on Linkedin" />
    </div>
  );
};

export const Statscomponent = ({ subscriber, text }) => {
  console.log(subscriber);
  console.log(text);
  return (
    <div
      className="p-3 h-24 w-52 rounded-md  justify-around items-center  flex flex-col bg-black text-white font-extrabold hover:scale-125  transition delay-150 duration-300 ease-in-out"
      style={{ backgroundColor: "rgb(102, 116, 204)" }}
    >
      <h1 className="">{subscriber}</h1>
      <p>{text}</p>
    </div>
  );
};
