import React from "react";
import AnchorWithSVG from "../elements/anchor/AnchorWithSVG";

export default function SocialLinks() {
  return (
    <div className="flex flex-col-reverse md:flex-row my-8 text-yellow-300">
      <div className="w-full md:w-6/12 flex flex-col justify-center md:items-end my-6 md:my-0">
        <p className="text-3xl sm:text-4xl md:text-5xl font-medium">
          Our Social Links
        </p>
        <p className="text-gray-400 md:pl-10 my-6 md:text-lg 2xl:text-xl md:text-right">
          Connect with Salamander Tech Hub across our official platforms to
          stay updated on releases, updates, and community activity.
        </p>
        <div className="flex flex-row flex-wrap justify-center md:items-end">
          <AnchorWithSVG
            url="https://github.com/Salamander-Tech-Hub/"
            title="GitHub"
          />
          <AnchorWithSVG url="https://x.com/Salamander_hub" title="X" />
          <AnchorWithSVG
            url="https://www.linkedin.com/company/salamander-tech-hub/posts/?feedView=all"
            title="LinkedIn"
          />
        </div>
      </div>
      <div className="w-full md:w-6/12 flex flex-col justify-center items-center">
        <img
          src="/socials.svg"
          alt=""
          className="w-10/12 aspect-square select-none pointer-events-none -rotate-3"
          draggable="false"
        />
      </div>
    </div>
  );
}
