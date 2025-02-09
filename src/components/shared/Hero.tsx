import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center justify-center text-center py-16 px-4 ">
        <Image
          src="https://i.ibb.co/mrQzRFzP/Nahid-Pic.jpg"
          alt="Profile Picture"
          className="w-24 h-24 rounded-full border-4 border-gray-200 shadow-md"
          width={250}
          height={250}
        />
        <h2 className="text-xl font-medium mt-4">
          Hi! I'm <span className="font-semibold">Nahiduzzaman</span> 👋
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          Creating beautiful, <br />
          functional web experiences.
        </h1>
        <p className="text-gray-600 mt-4 max-w-lg">
          Passionate about building modern, scalable, and user-friendly web
          applications using React, Next.js, and TypeScript.
        </p>
        <div className="mt-6 flex gap-4">
          <Button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
            Contact Me →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
