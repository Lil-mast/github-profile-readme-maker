import React from "react";
import { GITHUB_SVG, LINKEDIN_SVG, X_SVG } from "./SVG";

export default function Footer() {
  return (
    <div className="flex flex-col w-full justify-center items-center pt-6 pb-2">
      <div className="flex flex-row flex-wrap space-x-2">
        {/* X */}
        <a
          className="bg-yellow-500 text-yellow-50 mt-3 hover:bg-yellow-600 font-semibold uppercase text-lg p-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 flex items-center w-max aspect-square"
          href="https://x.com/Salamander_hub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <X_SVG size={4} />
        </a>
        {/* GitHub */}
        <a
          className="bg-yellow-600 text-yellow-50 mt-3 hover:bg-yellow-700 font-semibold uppercase text-lg p-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center w-max aspect-square"
          href="https://github.com/Salamander-Tech-Hub/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GITHUB_SVG size={4} />
        </a>
        {/* LinkedIn */}
        <a
          className="bg-yellow-700 text-yellow-50 mt-3 hover:bg-yellow-800 font-semibold uppercase text-lg p-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center w-max aspect-square"
          href="https://www.linkedin.com/company/salamander-tech-hub/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LINKEDIN_SVG size={4} />
        </a>
      </div>
      {/* mail to */}
      <div className="flex justify-center w-full">
        <a
          href="mailto:christiantazma77@gmail.com"
          className="text-yellow-100 flex gap-1 text-base opacity-75 mt-2 transition-all ease-in-out hover:opacity-100"
          title="Contact us for any business, service or query."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          christiantazma77@gmail.com
        </a>
      </div>
      <div className="w-full flex justify-center items-center text-yellow-200">
        <p className="opacity-90 mt-2">
          crafted with love by Salamander Tech Hub{" "}
          <a
            href="https://github.com/Salamander-Tech-Hub/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-100"
          >
            Profile
          </a>
        </p>
      </div>
    </div>
  );
}
