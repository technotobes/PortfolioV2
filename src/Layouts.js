import React from "react";
import { Outlet } from "react-router-dom";
import Contact from "./parts/Contact";
import ProjectNav from "./parts/ProjectNav";
import Nav from "./parts/Nav";
import "rc-tooltip/assets/bootstrap.css";


function BaseLayout() {
  return (
    <div>
      <div className="flex p-12 md:px-20 md:py-13 justify-between">
        <div className="flex-col w-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-4xl font-semibold">
            {" "}
            Khang (Toby) Hoang
          </h1>
          <h2 className="text-yellow-200 md:text-2xl mt-5 font-light">
            Full Stack Developer
          </h2>
          <h2 className="text-gray-400 text-md md:text-lg mt-1 font-light">
            Based in Atlanta, Georgia
          </h2>
          <div className="md:hidden mt-8">
            <Contact />
          </div>
        </div>
        <div className="hidden flex w-1/4 justify-center h-1/2 md:inline md:w-2/3 lg:inline lg:w-2/3 xl:inline xl:w-1/2">
          <Contact />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="border bg-white w-11/12"></div>
      </div>

      <div className="flex justify-center p-4 text-white font-medium">
        <Nav />
      </div>

      <div className="flex justify-center md:hidden lg:hidden">
        <div className="border bg-white w-11/12"></div>
      </div>

      <Outlet />
    </div>
  );
}

function ProjectsLayout(props) {
  return (
    <div>
      <div className="flex justify-center">
        <ProjectNav />
      </div>

      <Outlet />
    </div>
  );
}

export { BaseLayout, ProjectsLayout };
