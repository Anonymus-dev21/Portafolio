import { FaWhatsapp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
export const Encabezado = () => {
  return (
    <div className="encabezado w-full border-b-[3px] border-black p-6 max-xsm:p-2">
      <div className="encabezado__content w-full flex items-center max-md:flex-col">
        <div className="img">
          <div className="box w-[200px] h-[200px] max-800:w-[180px] max-800:h-[170px] rounded-full border-4 border-gray-900">
            <img
              src="https://res.cloudinary.com/dgaxmhaj2/image/upload/v1732052691/Osky_Formal_lcj9vo.jpg"
              alt="Oscar Cabral"
              className="object-cover object-top w-full h-full rounded-full shadow-lg shadow-black"
            />
          </div>
        </div>
        <div className="encabezado__text w-[100%] max-intermedio:w-full max-md:text-center ml-4 h-full pt-[5%]">
          <h1 className="max-lg:text-4xl text-5xl font-bold dark:text-gray-200 text-gray-800 font-[Poppins] tracking-[2px] max-xsm:tracking-[0px]">
            Oscar Cabral
          </h1>
          <p className="font-[Urbanist] text-pretty dark:text-gray-200 text-gray-800 tracking-[1px]">
            Front-End Developer - trainees
          </p>
          <div className="buttons flex max-xl:w-[90%] max-md:text-sm max-xsm:w-full max-md:justify-center items-center mt-4 font-[Poppins] my-10">
            <a href="https://wa.link/gevi1e" target="_blank" rel="noreferrer">
              <div className="btn1 mr-2">
                <div className="px-2 py-2 font-bold bg-green-400 rounded-full group text-lg hover:text-white transition-colors duration-300">
                  <FaWhatsapp className="group-hover:translate-y-[-2px] text-2xl transition-transform duration-300  " />
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/cabral-oscar"
              target="_blank"
              rel="noreferrer"
            >
              <div className="btn2">
                <span className="px-3 py-[6px] bg-violet-500 rounded-lg hover:bg-violet-700 transition-colors duration-300 hover:underline text-gray-200 font-semibold tracking-tight select-none">
                  LinkedIn
                </span>
              </div>
            </a>

            <a
              href="/assets/CvCabral.pdf"
              download="Cv Descargado"
              className="px-3 py-1 flex rounded-md font-medium relative z-[9999999999] relative z-[9999999999] data-[tooltip]:after:content-[attr(data-tooltip)] data-[tooltip]:after:invisible data-[tooltip]:after:scale-50 data-[tooltip]:after:origin-bottom data-[tooltip]:after:opacity-0 hover:data-[tooltip]:after:visible hover:data-[tooltip]:after:opacity-100 hover:data-[tooltip]:after:scale-100 data-[tooltip]:after:transition-all data-[tooltip]:after:absolute data-[tooltip]:after:bg-black data-[tooltip]:after:bottom-[calc(100%+4px)] data-[tooltip]:after:left-1/2 data-[tooltip]:after:-translate-x-1/2 data-[tooltip]:after:-z-[1] data-[tooltip]:after:px-1.5 data-[tooltip]:after:py-1 data-[tooltip]:after:min-h-fit data-[tooltip]:after:min-w-fit data-[tooltip]:after:rounded-md data-[tooltip]:after:drop-shadow data-[tooltip]:before:drop-shadow data-[tooltip]:after:text-center data-[tooltip]:after:text-white data-[tooltip]:after:whitespace-nowrap data-[tooltip]:after:text-[10px] data-[tooltip]:before:invisible data-[tooltip]:before:opacity-0 hover:data-[tooltip]:before:visible hover:data-[tooltip]:before:opacity-100 data-[tooltip]:before:transition-all data-[tooltip]:before:bg-black data-[tooltip]:before:[clip-path:polygon(100%_0,0_0,50%_100%)] data-[tooltip]:before:absolute data-[tooltip]:before:bottom-full data-[tooltip]:before:left-1/2 data-[tooltip]:before:-translate-x-1/2 data-[tooltip]:before:z-0 data-[tooltip]:before:w-3 data-[tooltip]:before:h-[4px] tracking-normal"
              data-tooltip={"Descargar CV"}
            >
              <div className="btn3 ">
                <div className="px-3 py-3 font-bold bg-black rounded-full group text-lg text-white hover:text-slate-100  dark:bg-white dark:text-black  transition-colors duration-300">
                  <FaDownload className="group-hover:translate-y-[1px] text-xl transition-transform duration-300  " />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="TOPROJECTS w-full flex  justify-center items-center translate-y-5">
        <a href="#projects">
          <div className=" text-md text-gray-400 tracking-wide dark:text-gray-200 font-[Urbanist] group transition-all duration-500 hover:text-gray-300 flex flex-col justify-center items-center cursor-pointer">
            <span>Ver proyectos</span>
            <div className="text-xl text-gray-300  dark:text-gray-200 mt-[-5px] group-hover:mt-0 transition-all duration-500">
              <FaChevronDown />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
