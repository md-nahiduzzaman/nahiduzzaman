import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import project1pic from "../../assets/lifeline.jpg";

const FeaturedProject = () => {
  return (
    <section className="container mx-auto">
      <div className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" p-6 rounded-lg overflow-hidden border">
            <Image
              src={project1pic}
              alt="Project 1"
              className="w-full object-cover rounded-md"
              width={300}
              height={200}
            />
            <h3 className="text-xl font-semibold mt-4">Project Name 1</h3>
            <p className="text-gray-600 mt-2">
              A short description of the project goes here. Mention key features
              or technologies used.
            </p>
            <Button className="mt-4 bg-black text-white px-4 py-2 rounded-full">
              View Project
            </Button>
          </div>
          <div className=" p-6 rounded-lg overflow-hidden border">
            <Image
              src={project1pic}
              alt="Project 1"
              className="w-full object-cover rounded-md"
              width={300}
              height={200}
            />
            <h3 className="text-xl font-semibold mt-4">Project Name 1</h3>
            <p className="text-gray-600 mt-2">
              A short description of the project goes here. Mention key features
              or technologies used.
            </p>
            <Button className="mt-4 bg-black text-white px-4 py-2 rounded-full">
              View Project
            </Button>
          </div>
          <div className=" p-6 rounded-lg overflow-hidden border">
            <Image
              src={project1pic}
              alt="Project 1"
              className="w-full object-cover rounded-md"
              width={300}
              height={200}
            />
            <h3 className="text-xl font-semibold mt-4">Project Name 1</h3>
            <p className="text-gray-600 mt-2">
              A short description of the project goes here. Mention key features
              or technologies used.
            </p>
            <Button className="mt-4 bg-black text-white px-4 py-2 rounded-full">
              View Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
