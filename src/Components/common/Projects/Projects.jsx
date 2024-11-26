import { IoBagHandle } from "react-icons/io5";
import { CardProject } from "../CardsProject";
import { FaHtml5, FaJsSquare, FaSass, FaCss3Alt } from "react-icons/fa";

export const Projects = ({ projects }) => {
  return (
    <>
      <div
        className="flex w-full text-center justify-center items-center"
        id="projects"
      >
        <div className="flex group">
          <h2 className="text-center text-2xl font-semibold text-indigo-400 dark:text-gray-300 font-[Poppins]">
            Proyectos
          </h2>
          <IoBagHandle className=" text-[40px] font-semibold text-violet-500 pl-2 pb-2 transition-all duration-500 group-hover:translate-y-[2px]" />
        </div>
      </div>
      {projects.map((project) => {
        return (
          <CardProject
            img={project.image}
            title={project.title}
            link={project.link}
            description={project.description}
            tecnologys={project.tecnologys}
          />
        );
      })}
    </>
  );
};
