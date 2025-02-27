import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { IProject } from "@/app/types";

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <div className="p-6 rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300">
      <Image
        src={project.imageSrc}
        alt={project.title}
        className="w-full object-cover rounded-md"
        width={300}
        height={200}
      />
      <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
      <p className="text-gray-600 mt-2">{project.description}</p>
      <Link href={`/projects/${project.id}`}>
        <Button className="mt-4 bg-black text-white px-4 py-2 rounded-full">
          View Project
        </Button>
      </Link>
    </div>
  );
};

export default ProjectCard;
