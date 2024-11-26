import {
  FaHtml5,
  FaJsSquare,
  FaSass,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaCode,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
export const InfiniteLoop = () => {
  return (
    <>
      <div className="infinite__tecnologys__container w-full mt-20 mb-20 overflow-hidden">
        <div className="slide__title w-full flex justify-center mb-[40px]">
          <div className="text-2xl flex items-center justify-center font-semibold dark:text-gray-300 text-indigo-400 font-[Poppins] select-none tecnologia group">
            Tecnologías
            <FaCode className="text-center text-[40px] font-semibold text-violet-500 pl-2 icon-codigo transition-all duration-500 group-hover:translate-y-[2px] " />
          </div>
        </div>

        {/* Carrusel infinito */}
        <div className="text-5xl space-x-[80px] overflow-hidden text-blue-600 whitespace-nowrap flex">
          {/* Primera fila de tecnologías */}
          <div className="general__tecnologys animate-loop-scroll space-x-[80px]  flex select-none">
            <FaHtml5 className="text-orange-700" />
            <FaJsSquare className="text-yellow-400" />
            <FaReact className="text-blue-400" />
            <RiTailwindCssFill className="text-blue-400" />
            <FaSass className="text-pink-600" />
            <FaCss3Alt className="text-blue-600" />
            <FaGit className="text-black dark:text-white" />
            <FaGithub className="text-black" />
          </div>

          {/* Segunda fila de tecnologías (duplicada para efecto infinito) */}
          <div
            className="general__tecnologys animate-loop-scroll space-x-[80px] flex select-none"
            aria-hidden="true"
          >
            <FaHtml5 className="text-orange-700" />
            <FaJsSquare className="text-yellow-400" />
            <FaReact className="text-blue-400" />
            <RiTailwindCssFill className="text-blue-400" />
            <FaSass className="text-pink-600" />
            <FaCss3Alt className="text-blue-600" />
            <FaGit className="text-black dark:text-white" />
            <FaGithub className="text-black" />
          </div>
        </div>
      </div>
    </>
  );
};
