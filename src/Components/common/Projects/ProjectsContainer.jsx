import { Projects } from "./Projects";
import {
  FaHtml5,
  FaJsSquare,
  FaSass,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
export const ProjectContainer = () => {
  const projects = [
    {
      title: "Lector-Comerce",
      image:
        "https://res.cloudinary.com/dgaxmhaj2/image/upload/v1732149122/LectorComercePfolio_vl2mxl.jpg",
      link: "https://react-comerce.vercel.app/",
      description:
        "Simulación de un e-commerce avanzado utilizando React con Firebase con carrito de compras, detalles de productos, contacto funcional, orden de compra ficticia y control de stock.",
      tecnologys: [
        { icon: <FaReact />, color: "text-blue-400", name: "React" },
        {
          icon: <IoLogoFirebase />,
          color: "text-orange-600",
          name: "Firebase",
        },
        {
          icon: <RiTailwindCssFill />,
          color: "text-blue-600",
          name: "Tailwind",
        },
      ],
    },
    {
      title: "E-commerce",
      image:
        "https://res.cloudinary.com/dgaxmhaj2/image/upload/v1732052690/E-comerce_qrpo19.jpg",
      link: "https://galaxycomerce.netlify.app/",
      description:
        "Simulación sencilla de un e-commerce de lamparas y proyectorees sin frameworks.",
      tecnologys: [
        { icon: <FaHtml5 />, color: "text-orange-700", name: "HTML" },
        { icon: <FaJsSquare />, color: "text-yellow-400", name: "Java Script" },
        { icon: <FaSass />, color: "text-pink-600", name: "Sass" },
        { icon: <FaCss3Alt />, color: "text-blue-600", name: "Css" },
      ],
    },

    {
      title: "Pelueyg",
      image:
        "https://res.cloudinary.com/dgaxmhaj2/image/upload/v1732052690/Barber_uo3pyl.jpg",
      link: "https://pelueyg-barber.netlify.app/",
      description: "Landing page solicitada por una barbería de mi ciudad.",
      tecnologys: [
        { icon: <FaHtml5 />, color: "text-orange-700", name: "HTML" },
        { icon: <FaJsSquare />, color: "text-yellow-400", name: "Java Script" },
        { icon: <FaSass />, color: "text-pink-600", name: "Sass" },
        { icon: <FaCss3Alt />, color: "text-blue-600", name: "Css" },
      ],
    },
    {
      title: "Cronómetro",
      image:
        "https://res.cloudinary.com/dgaxmhaj2/image/upload/v1732052690/Cronometer_rwgtkr.jpg",
      link: "https://croonometer.netlify.app/",
      description: "Un cronómetro que podes iniciar, pausar y resetear.",
      tecnologys: [
        { icon: <FaHtml5 />, color: "text-orange-700", name: "HTML" },
        { icon: <FaJsSquare />, color: "text-yellow-400", name: "Java Script" },
        { icon: <FaSass />, color: "text-pink-600", name: "Sass" },
        { icon: <FaCss3Alt />, color: "text-blue-600", name: "Css" },
        ,
      ],
    },
    {
      title: "Travel with us",
      image:
        "https://res.cloudinary.com/dgaxmhaj2/image/upload/v1732052691/trvl_y4ykco.jpg",
      link: "https://travelwith-us.netlify.app/",
      description: "Una web informativa de distintos países. Solo Maquetado.",
      tecnologys: [
        { icon: <FaHtml5 />, color: "text-orange-700", name: "HTML" },

        { icon: <FaSass />, color: "text-pink-600", name: "Sass" },
        { icon: <FaCss3Alt />, color: "text-blue-600", name: "Css" },
      ],
    },
  ];
  return <Projects projects={projects} />;
};
