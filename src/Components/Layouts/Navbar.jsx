import { useEffect, useRef, useState } from "react";
import { Theme } from "../common/Theme";
export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const headerRef = useRef(null);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > prevScrollPos) {
      headerRef.current.style.top = "-150px";
    } else {
      headerRef.current.style.top = "0px";
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <>
      <header
        className="darknav transition-all duration-500 sticky top-0 px-5 py-2 bg-white dark:bg-gray-800 bg-opacity-90 backdrop-blur-2xl rounded-b-xl rounded-bl-xl z-50"
        ref={headerRef}
      >
        <nav className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <div className="w-[70px] h-[70px] rounded-full">
              <img
                src="https://res.cloudinary.com/dgaxmhaj2/image/upload/v1732052691/Osky_Formal_lcj9vo.jpg"
                alt="Oscar Cabral"
                className="object-cover object-top w-full h-full rounded-full"
              />
            </div>
            <span className="text-lg font-bold text-gray-800 dark:text-gray-200 font-[Poppins] pl-2">
              Oscar Cabral
            </span>
          </div>
          <Theme />
        </nav>
      </header>
    </>
  );
};
