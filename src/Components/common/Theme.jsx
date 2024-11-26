import { useEffect, useState } from "react";
export const Theme = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleMode = () => {
    setDarkTheme(!darkTheme);
  };
  useEffect(() => {
    darkTheme
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  }, [darkTheme]);

  return (
    <>
      <div>
        <input
          type="checkbox"
          id="react-option"
          className="hidden peer"
          required
        />
        <label
          htmlFor="react-option"
          className="label flex z-10 items-center peer relative justify-center w-10 h-10 shadow-lg duration-300 [box-shadow:1px_1px_0px_1px_#eab92d] border-0 dark:border-2 border-gray-800 peer-checked:border-2 peer-checked:border-gray-800 rounded-lg cursor-pointer text-neutral-50 peer-checked:[box-shadow:1px_1px_0px_1px_#075985] peer-checked:hover:[box-shadow:1px_1px_0px_1px_#1e1e1e] hover:[box-shadow:1px_1px_0px_1px_#1e1e1e]"
          onClick={toggleMode}
        ></label>
        <svg
          className="absolute stroke-sky-800 w-10 h-21 duration-300 peer-checked:opacity-100 opacity-0 top-[-5px]"
          height="100"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 100 100"
          width="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="svg-stroke-primary"
            d="M82.1,61.2a31.9,31.9,0,0,1-12.4,2.4A33.3,33.3,0,0,1,36.4,30.3a31.9,31.9,0,0,1,2.4-12.4A33.3,33.3,0,1,0,82.1,61.2Z"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
        </svg>
        <svg
          className="absolute stroke-yellow-500 w-10 h-21 duration-300 peer-checked:opacity-0 top-[-5px] opacity-100"
          height="100"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 100 100"
          width="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="svg-stroke-primary"
            d="M50,18v3.6m0,56.8V82M82,50H78.4M21.6,50H18M72.6,72.6l-2.5-2.5M29.9,29.9l-2.5-2.5m45.2,0-2.5,2.5M29.9,70.1l-2.5,2.5M64.2,50A14.2,14.2,0,1,1,50,35.8,14.3,14.3,0,0,1,64.2,50Z"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
        </svg>
      </div>
    </>
  );
};
