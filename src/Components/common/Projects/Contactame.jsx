import { IoMdSend } from "react-icons/io";
import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
export const Contactame = () => {
  const [copied, setCopied] = useState(false);

  const inputRef = useRef(null);
  const handleCopy = () => {
    navigator.clipboard.writeText(inputRef.current.value);
  };

  const handleClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <section className="my-10">
      <div className="my-5">
        <div className="flex group w-full justify-center text-center">
          <span className="text-center text-2xl font-semibold dark:text-gray-300 text-indigo-400 font-[Poppins] select-none">
            E-mail
          </span>
          <i className="fa-regular fa-envelope text-center text-2xl font-semibold text-violet-500  group-hover:translate-y-[2px] transition-all duration-500"></i>
        </div>
      </div>
      <div className="general__input__container flex justify-left max-sm:w-full max-sm:justify-center items-center">
        <div className="input w-[80%] max-md:[70%] max-sm:w-auto">
          <input
            type="text"
            disabled
            className="w-full bg-gray-800 dark:bg-gray-700 px-5 py-3 rounded-xl tracking-wide font-[Poppins] dark:text-gray-300 text-white"
            value="oscab05@outlook.com"
            ref={inputRef}
          />
        </div>
        <div className="botones--input flex w-[20%] max-sm:w-auto text-white text-center text-lg font-bold">
          <a href="mailto:oscab05@outlook.com">
            <div className="flex flex-col gap-3 text-center items-center mx-1">
              <button
                className="px-1 py-0 rounded-md relative z-[9999999999] data-[tooltip]:after:content-[attr(data-tooltip)] data-[tooltip]:after:invisible data-[tooltip]:after:scale-50 data-[tooltip]:after:origin-bottom data-[tooltip]:after:opacity-0 hover:data-[tooltip]:after:visible hover:data-[tooltip]:after:opacity-100 hover:data-[tooltip]:after:scale-100 data-[tooltip]:after:transition-all data-[tooltip]:after:absolute data-[tooltip]:after:bg-white data-[tooltip]:after:bottom-[calc(100%+4px)] data-[tooltip]:after:left-1/2 data-[tooltip]:after:-translate-x-1/2 data-[tooltip]:after:-z-[1] data-[tooltip]:after:px-1 data-[tooltip]:after:py-[0.1px] data-[tooltip]:after:min-h-fit data-[tooltip]:after:min-w-fit data-[tooltip]:after:rounded-md data-[tooltip]:after:drop-shadow data-[tooltip]:before:drop-shadow data-[tooltip]:after:text-center data-[tooltip]:after:text-black data-[tooltip]:after:whitespace-nowrap data-[tooltip]:after:text-[10px] data-[tooltip]:before:invisible data-[tooltip]:before:opacity-0 hover:data-[tooltip]:before:visible hover:data-[tooltip]:before:opacity-100 data-[tooltip]:before:transition-all data-[tooltip]:before:bg-gray-100 data-[tooltip]:before:border-t-0 data-[tooltip]:before:[clip-path:polygon(100%_0,0_0,50%_100%)] data-[tooltip]:before:absolute data-[tooltip]:before:bottom-full data-[tooltip]:before:left-1/2 data-[tooltip]:before:-translate-x-1/2 data-[tooltip]:before:z-0 data-[tooltip]:before:w-3 data-[tooltip]:before:h-[4px] tracking-normal font-semibold font-[Poppins]"
                data-tooltip="Enviame un e-mail"
              >
                <div className="w-[55px] h-[45px] bg-gray-800 dark:bg-gray-700 rounded-2xl transition-transform hover:border-[1px] border-gray-600 hover:shadow-sm hover:shadow-gray-400 group duration-300 text-center flex items-center justify-center ">
                  <IoMdSend className=" text-2xl group-hover:translate-x-[3px]  transition-transform duration-500" />
                </div>
              </button>
            </div>
          </a>

          <div
            className="flex flex-col gap-3 text-center items-center mx-1 relative"
            onClick={() => {
              handleCopy(), handleClick();
            }}
          >
            <button
              className="px-1 py-0 rounded-md relative z-[9999999999] data-[tooltip]:after:content-[attr(data-tooltip)] data-[tooltip]:after:invisible data-[tooltip]:after:scale-50 data-[tooltip]:after:origin-bottom data-[tooltip]:after:opacity-0 hover:data-[tooltip]:after:visible hover:data-[tooltip]:after:opacity-100 hover:data-[tooltip]:after:scale-100 data-[tooltip]:after:transition-all data-[tooltip]:after:absolute data-[tooltip]:after:bg-white data-[tooltip]:after:bottom-[calc(100%+4px)] data-[tooltip]:after:left-1/2 data-[tooltip]:after:-translate-x-1/2 data-[tooltip]:after:-z-[1] data-[tooltip]:after:px-1 data-[tooltip]:after:py-[0.1px] data-[tooltip]:after:min-h-fit data-[tooltip]:after:min-w-fit data-[tooltip]:after:rounded-md data-[tooltip]:after:drop-shadow data-[tooltip]:before:drop-shadow data-[tooltip]:after:text-center data-[tooltip]:after:text-black data-[tooltip]:after:whitespace-nowrap data-[tooltip]:after:text-[10px] data-[tooltip]:before:invisible data-[tooltip]:before:opacity-0 hover:data-[tooltip]:before:visible hover:data-[tooltip]:before:opacity-100 data-[tooltip]:before:transition-all data-[tooltip]:before:bg-gray-100 data-[tooltip]:before:border-t-0 data-[tooltip]:before:[clip-path:polygon(100%_0,0_0,50%_100%)] data-[tooltip]:before:absolute data-[tooltip]:before:bottom-full data-[tooltip]:before:left-1/2 data-[tooltip]:before:-translate-x-1/2 data-[tooltip]:before:z-0 data-[tooltip]:before:w-3 data-[tooltip]:before:h-[4px] tracking-normal font-semibold font-[Poppins]"
              data-tooltip="Copiar e-mail"
            >
              <div className="w-[55px] h-[45px] bg-gray-700 dark:bg-gray-700 rounded-2xl transition-transform hover:border-[1px] border-gray-600 hover:shadow-sm hover:shadow-gray-400 group duration-300 text-center flex items-center justify-center">
                <FaCopy className=" text-2xl group-hover:translate-x-[3px]  transition-transform duration-500" />
              </div>
            </button>
            <button
              className={`px-2 py-1  absolute bottom-[-25px] ml-2  text-slate-800 ${
                copied ? "text-[10px] opacity-100" : "text-[0px] opacity-0"
              } font-bold rounded-md tracking-wider text-sm font-[Poppins] hover:bg-gray-500 transition-all duration-300 ease-in-out`}
            >
              {" "}
              Copiado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
