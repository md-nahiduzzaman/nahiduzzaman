import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import project1pic from "../../assets/flowhr.png";
import project2pic from "../../assets/lifeline.jpg";
import project3pic from "../../assets/paintshop.png";

const projects = [
  {
    name: "Flow HR",
    description:
      "Flow HR is a modern HR management system that streamlines employee management, payroll, and attendance tracking. It integrates with Stripe for secure payments and utilizes React Query for efficient data fetching.",
    image: project1pic,
    github: "https://github.com/md-nahiduzzaman/flow-hr-client",
    live: "https://flow-hr-bd0c8.web.app/",
  },
  {
    name: "Lifeline",
    description:
      "Lifeline is a team-based project focused on providing a seamless health consultation experience. It features real-time doctor-patient interaction, appointment scheduling, and secure payment integration. Built using React, Firebase, and Socket.io for real-time updates.",
    image: project2pic,
    github: "https://github.com/md-nahiduzzaman/lifeline",
    live: "https://lifeline-omega.vercel.app/",
  },
  {
    name: "Paint Shop",
    description:
      "Paint Shop is an e-commerce platform built with React that offers a seamless shopping experience for customers looking to purchase high-quality paints. It includes Firebase authentication, smooth animations, and an intuitive UI for easy navigation.",
    image: project3pic,
    github: "https://github.com/md-nahiduzzaman/paint-shop-client",
    live: "https://tripbd-react.web.app/",
  },
];

const FeaturedProject = () => {
  return (
    <section className="container mx-auto">
      <div className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 rounded-lg overflow-hidden border">
              <Image
                src={project.image}
                alt={project.name}
                className="w-full object-cover rounded-md"
                width={300}
                height={200}
              />
              <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="flex gap-4 mt-4">
                <Button
                  className="bg-black text-white px-4 py-2 rounded-full"
                  asChild
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                </Button>
                <Button
                  className="bg-gray-700 text-white px-4 py-2 rounded-full"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
