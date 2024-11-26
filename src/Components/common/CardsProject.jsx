import { FaHtml5, FaJsSquare, FaSass, FaCss3Alt } from "react-icons/fa";
export const CardProject = ({ title, description, link, img, tecnologys }) => {
  return (
    <>
      <div className="cards">
        <div className="card my-14 relative flex w-full rounded-2xl z-10 mt-10 max-sm:flex-col">
          <div className="img__container w-[500px] max-sm:w-full h-[200px] overflow-hidden z-10 bg-blue-900 rounded-lg">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                src={img}
                alt={title}
                className="rounded-l-xl rounded-xl object-cover object-top w-full h-full z-10 pt-7 pl-10 transition-all duration-600 hover:pt-2 hover:pl-3"
              />
            </a>
          </div>
          <div className="card__texto pl-5 z-10 flex flex-col w-[70%] max-sm:w-full">
            <div className="max-sm:my-2">
              <h4 className="text-xl font-semibold dark:text-gray-100 text-gray-800 font-[Poppins] pb-2">
                {title}
              </h4>
              <p className="font-[Urbanist] text-pretty dark:text-gray-200 text-gray-800 tracking-[1px] z-10">
                {description}
              </p>
            </div>
            <div className="links mt-2 group mb-10">
              <a href={link} target="_blank">
                <button className="dark:bg-white bg-blue-600 text-white dark:text-gray-900 px-3 py-[2px] rounded-md text-center font-extrabold text-xl tracking-[1px] font-[Urbanist] transition-all duration-200 group-hover:px-6">
                  Live
                  <i className="fa-solid fa-paperclip pl-1 text-lg font-bold group-hover:rotate-[16deg] transition-all duration-200"></i>
                </button>
              </a>
            </div>
            <div className="absolute text-3xl bottom-[-10px] max-xsm:bottom-[-20px]  max-xsm:left-0 tracking-[5px] flex ">
              <div className="flex   gap-3 text-center items-center mx-2">
                {tecnologys.map((tecnologia) => {
                  return (
                    <button
                      className="px-3 py-1 flex rounded-md font-medium relative z-[9999999999] relative z-[9999999999] data-[tooltip]:after:content-[attr(data-tooltip)] data-[tooltip]:after:invisible data-[tooltip]:after:scale-50 data-[tooltip]:after:origin-bottom data-[tooltip]:after:opacity-0 hover:data-[tooltip]:after:visible hover:data-[tooltip]:after:opacity-100 hover:data-[tooltip]:after:scale-100 data-[tooltip]:after:transition-all data-[tooltip]:after:absolute data-[tooltip]:after:bg-black data-[tooltip]:after:bottom-[calc(100%+4px)] data-[tooltip]:after:left-1/2 data-[tooltip]:after:-translate-x-1/2 data-[tooltip]:after:-z-[1] data-[tooltip]:after:px-1.5 data-[tooltip]:after:py-1 data-[tooltip]:after:min-h-fit data-[tooltip]:after:min-w-fit data-[tooltip]:after:rounded-md data-[tooltip]:after:drop-shadow data-[tooltip]:before:drop-shadow data-[tooltip]:after:text-center data-[tooltip]:after:text-white data-[tooltip]:after:whitespace-nowrap data-[tooltip]:after:text-[10px] data-[tooltip]:before:invisible data-[tooltip]:before:opacity-0 hover:data-[tooltip]:before:visible hover:data-[tooltip]:before:opacity-100 data-[tooltip]:before:transition-all data-[tooltip]:before:bg-black data-[tooltip]:before:[clip-path:polygon(100%_0,0_0,50%_100%)] data-[tooltip]:before:absolute data-[tooltip]:before:bottom-full data-[tooltip]:before:left-1/2 data-[tooltip]:before:-translate-x-1/2 data-[tooltip]:before:z-0 data-[tooltip]:before:w-3 data-[tooltip]:before:h-[4px] tracking-normal"
                      data-tooltip={tecnologia.name}
                    >
                      <div
                        className={`fa-brands fa-html5 ${tecnologia.color} text-3xl `}
                      >
                        {tecnologia.icon}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
