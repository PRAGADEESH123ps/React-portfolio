// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profill.jpeg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import Python from "./assets/techstack/Python.png";
import sql from "./assets/techstack/Sql.png";
import django from "./assets/techstack/django.png";
import Api from "./assets/techstack/Api.png";
// Porject Images
import projectImage1 from "./assets/projects/weather.png";
import projectImage2 from "./assets/projects/portfolio.png";
import projectImage3 from "./assets/projects/bus.png";
import projectImage4 from "./assets/projects/shop.png";


// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Pragadeesh S",
  tagline: "I build things for web",
  img: profile,
  about: `Self-driven full-stack Python developer with hands-on experience in building complete web applications using Django and React.
I’m committed to writing clean code, creating seamless UIs, and continuously improving my development skills.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/pragadeesh-s12/",
  github: "https://github.com/PRAGADEESH123ps",
  twitter: "#",
  instagram: "#",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `SAOP IT Solutions`,
    Location: "Remote",
    Type: "Internship",
    Duration: "Jul 2024 - Oct 2024",
  },
  
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Python Full Stack Development",
    Company: "FITA, Academy",
    Location: "Online",
    Type: "Full Time",
    Duration: "Mar 2025 - Jun 2025",
  },
  {
    Position: "Bachelor Of Computer Application",
    Company: `Dr.R.A.N.M Atrs And Science College`,
    Location: "Erode",
    Type: "Full Time",
    Duration: "Aug 2021 - Jun 2024",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  Python:Python,
  sql:sql,
  django:django,
  Api:Api,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Weathe App",
    image: projectImage1,
    description: `A real-time weather application that fetches and displays accurate weather data like temperature, humidity, and wind speed using the OpenWeatherMap API.
Designed with a clean and responsive UI, allowing users to search any city and view live weather updates instantly.`,
    techstack: "React/Tailwind, OpenWeatherApi",
    previewLink: "https://opeanweather.vercel.app/",
    githubLink: "https://github.com/PRAGADEESH123ps/opeanweather",
  },
  {
    title: "Portfolio",
    image: projectImage2,
    description: `A modern, responsive personal portfolio built with React and Tailwind CSS, showcasing my projects, skills, and experience.
     Designed with smooth UI interactions, reusable components, and mobile-first responsiveness to create a professional online presence.`,
    techstack: "React, Tailwind ",
    previewLink: "https://portfolio-phi-seven-75.vercel.app/",
    githubLink: "https://github.com/PRAGADEESH123ps/portfolio",
  },
  {
    title: "Travel App",
    image: projectImage3,
    description: `A full-stack travel application developed using React and Django. Users can explore destinations, view travel packages, and book trips in real-time.
     The app features a secure booking system, dynamic data management, and a fully responsive  with Tailwind CSS.`,
    techstack: "React/Tailwind, Django",
    previewLink: "#",
    githubLink: "https://github.com/PRAGADEESH123ps/travel-app",
  },
  {
    title: "Shopping cart",
    image: projectImage4,
    description: `A modern e-commerce shopping cart built with React, Redux for state management, and styled using Tailwind CSS. 
    Users can browse products, add/remove items from the cart, and view real-time cart updates with a responsive and seamless user experience.`,
    techstack: "React/TailwindCss, FackApi",
    previewLink: "https://shopping-cart-ten-ivory.vercel.app/",
    githubLink: "https://github.com/PRAGADEESH123ps/shopping-cart",
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "spragadeesh73@gmail.com",
  phone: "+91 86674 88685",
};
