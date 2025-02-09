import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";

const Skill = () => {
  return (
    <section className="container mx-auto">
      <div className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <div className=" p-6 rounded-lg  text-center border items-center justify-center flex flex-col">
            <FaReact size={50} color="#61DAFB" />
            <h3 className="text-xl font-semibold mt-4">React</h3>
          </div>

          <div className=" p-6 rounded-lg  text-center border items-center justify-center flex flex-col">
            <FaHtml5 size={50} color="#E34F26" />
            <h3 className="text-xl font-semibold mt-4">HTML</h3>
          </div>

          <div className=" p-6 rounded-lg  text-center border items-center justify-center flex flex-col">
            <FaCss3Alt size={50} color="#2965F1" />
            <h3 className="text-xl font-semibold mt-4">CSS</h3>
          </div>

          <div className=" p-6 rounded-lg  text-center border items-center justify-center flex flex-col">
            <FaJs size={50} color="#F7DF1E" />
            <h3 className="text-xl font-semibold mt-4">JavaScript</h3>
          </div>

          <div className=" p-6 rounded-lg  text-center border items-center justify-center flex flex-col">
            <FaNodeJs size={50} color="#339933" />
            <h3 className="text-xl font-semibold mt-4">Node.js</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
