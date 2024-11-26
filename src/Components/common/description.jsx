import { FaPersonWalking } from "react-icons/fa6";
export const Description = () => {
  return (
    <aside className="description">
      <div className="title__description select-none max-md:px-5 max-md:py-1">
        <div className="flex items-center mt-10 mb-[-5px]">
          <div className="flex group">
            <h2 className="text-3xl font-semibold dark:text-gray-100 text-indigo-400 font-[Poppins]">
              Sobre mí
            </h2>
            <FaPersonWalking className="text-3xl font-semibold text-violet-500 pl-2 group-hover:translate-y-[2px] transition-all duration-500" />
          </div>
        </div>
      </div>
      <div className="subtitle mb-5 mt-0 max-md:px-5 max-md:py-1">
        <span className="font-[Urbanist] text-pretty text-white opacity-50 tracking-[1px] font-semibold text-[12px]">
          Description
        </span>
      </div>
      <div className="desc">
        <p className="dark:text-gray-100 text-gray-800 font-medium font-[Urbanist] max-md:px-5 max-md:py-1">
          Soy un desarrollador Front-End con una gran pasión por la programación
          y el aprendizaje continuo. Actualmente estudio en CoderHouse la
          carrera de desarrollo web Full Stack, acompañado de un aprendizaje
          significativo de manera autodidacta. El próximo año comenzaré la
          Licenciatura en Informática en la Universidad de Palermo. Me motiva
          investigar, resolver problemas y enfrentar nuevos desafíos. Además de
          estar comprometido con el seguir aprendiendo, creo que mi enfoque
          proactivo, mis habilidades de investigación y mi capacidad para
          resolver problemas pueden aportar un valor significativo a la empresa
          que me contrate, acercandola aún mas a sus objetivos.
        </p>
      </div>
    </aside>
  );
};
