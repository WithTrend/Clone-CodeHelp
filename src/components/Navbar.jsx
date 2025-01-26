export const Navbar = () => {
  return (
    <nav className="bg-black p-3 pl-24 flex items-center ">
      {/*  Logo */}
      <a href="/">
        <img
          src="https://www.codehelp.in/_next/image?url=%2Fassets%2FCommon%2FWhitelogoGIF.gif&w=640&q=75"
          className="h-16 w-60"
          alt="CodeHelpLogo"
        />
      </a>
      {/* Navbar Contents */}
      <ul className="text-white flex gap-3 ml-30 ">
        <li>
          <a
            href="/"
            className="font-bold hover:border-y-1 border-indigo-500 p-2 cursor-pointer"
            style={{ color: "rgb(102, 116, 204)" }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/courses"
            className="hover:border-y-1 border-indigo-500 p-2 cursor-pointer"
          >
            Courses
          </a>
        </li>
        <li>
          <a
            href="/explore"
            className=" hover:border-y-1 border-indigo-500 p-2 cursor-pointer"
          >
            Explore
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className=" hover:border-y-1 border-indigo-500 p-2 cursor-pointer"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="/articles"
            className=" hover:border-y-1 border-indigo-500 p-2 cursor-pointer"
          >
            Articles
          </a>
        </li>
        <li>
          <a
            href="/tutorials"
            className=" hover:border-y-1 border-indigo-500 p-2 cursor-pointer"
          >
            Tutorials
          </a>
        </li>
      </ul>
      {/* Login Button */}
      <button
        type="button"
        className="text-white flex ml-30  px-6 py-2 cursor-pointer rounded-md"
        style={{ backgroundColor: "rgb(102, 116, 204)" }}
      >
        Login
      </button>
    </nav>
  );
};
