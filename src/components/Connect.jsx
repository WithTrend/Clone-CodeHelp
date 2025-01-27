/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

// Slider data
const arr = [
  {
    svg: "https://img.icons8.com/keek/100/rocket.png",
    heading: "Hands-on Learning Exercise",
    paragraph:
      "Climb with CodeHelp's Grow. Upskill through CodeHelp and achieve career success.",
  },
  {
    svg: "https://img.icons8.com/keek/100/rocket.png",
    heading: "Grow: Elevate your Career",
    paragraph:
      "Emphasize that your courses are crafted by industry experts to ensure high-quality, up-to-date content.",
  },
  {
    svg: "https://img.icons8.com/keek/100/rocket.png",
    heading: "Apply: Build, Create, Play",
    paragraph: "Transform ideas into real-world applications and thrive.",
  },
  {
    svg: "https://img.icons8.com/keek/100/rocket.png",
    heading: "Innovate: Stay Ahead",
    paragraph:
      "Upskill to tackle real-world problems and innovate new solutions.",
  },
];

export const Connect = () => {
  const [startIndex, setStartIndex] = useState(0); // Index of the first visible item
  const [isAnimating, setIsAnimating] = useState(false); // Track animation state

  useEffect(() => {
    // Set up interval to slide every 2 seconds
    const interval = setInterval(() => {
      setIsAnimating(true); // Start animation
      setTimeout(() => {
        setStartIndex((prevIndex) => (prevIndex + 2) % arr.length); // Update to next two items
        setIsAnimating(false); // Reset animation state
      }, 900); // Matches the CSS animation duration (900ms)
    }, 3000); // 3-second interval

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Calculate the visible items (two at a time)
  const visibleItems = [
    arr[startIndex],
    arr[(startIndex + 1) % arr.length], // Loop to the start if at the end
  ];

  return (
    <div className="relative flex flex-col  sm:flex-row gap-8 p-8  rounded-lg shadow-md shadow-blue-300 my-16">
      {/* First Column */}
      <div className="overflow-hidden w-full sm:w-1/2 flex flex-col items-center">
        <div
          className={`transition-transform duration-900 ease-in-out flex flex-col gap-6 ${
            isAnimating ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          {visibleItems.map((data, index) => (
            <SliderComponent
              key={index}
              src={data.svg}
              heading={data.heading}
              paragraph={data.paragraph}
            />
          ))}
        </div>
      </div>

      {/* Second Column */}
      <div className="flex-1 text-center sm:text-left p-6 rounded-lg">
        <h2 className="text-3xl font-extrabold text-red-500 mb-4 leading-snug">
          Why We&apos;re Your
        </h2>
        <h2 className="text-3xl font-extrabold text-black mb-4 leading-snug">
          Best Code Learning Choice?
        </h2>

        <p className="text-md text-gray-700 leading-relaxed mb-6">
          Choose CodeHelp for an unparalleled coding experience. Learn from
          industry experts, build real-world projects, and achieve career
          success.
        </p>
        <button className="text-white px-6 py-3 cursor-pointer rounded-md bg-blue-400 hover:bg-blue-600 transition-all font-bold shadow-md">
          Let&apos;s Connect
        </button>
      </div>

      {/* Sticky Animated Div */}
      <span className="absolute top-4 left-4 h-16 w-16 rounded-full flex items-center justify-center bg-blue-100 shadow-lg animate-bounce text-xl font-bold text-white">
        🚀
      </span>
    </div>
  );
};

// Single slide component
function SliderComponent({ src, heading, paragraph }) {
  return (
    <div className="slider flex flex-col items-center p-6 bg-white rounded-lg shadow-lg border border-gray-200 w-full">
      <img src={src} alt={heading} className="h-16 w-16 mb-4" />
      <h1 className="font-bold text-xl text-gray-800 mb-2">{heading}</h1>
      <p className="text-gray-600 text-center">{paragraph}</p>
    </div>
  );
}
