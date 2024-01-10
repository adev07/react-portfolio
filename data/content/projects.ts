import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Curry Cook",
    desc: "A web application that facilitates seamless food ordering and delivery experiences.",
    img: "/static/projects/currycook.png",
    link: "https://currycook.com/",
    github: "https://github.com/braydentw/learn.theyei",
    tags: ["React", "TailwindCSS", "CSS", "TypeScript"],
  },
  {
    id: 1,
    title: "Digi Tracker",
    desc: "A project management software which enhance project tracking, task management, and collaboration.",
    img: "/static/projects/digitrack.png",
    github: "https://github.com/admin-digibranders-com/digitracker-front",
    tags: ["React", "CSS", "TailwindCSS", "TypeScript"],
  },
  {
    id: 2,
    title: "IT Repeats",
    desc: "A web application that enables college students to upload and access test questions from earlier years.",
    img: "/static/projects/itrepeats.png",
    link: "https://react-emoji-search.braydentw.vercel.app/",
    github: "https://github.com/braydentw/react-emoji-search",
    tags: ["React", "TailwindCSS", "Node.js", "Bootstrap"],
  },
  // {
  //   id: 3,
  //   title: "BitcoinTemp",
  //   desc: "A fun way to check the price of bitcoin! Cloudy days, sunny days, and Bitcoin Storms!",
  //   img: "/static/projects/bitcointemp.png",
  //   link: "https://bitcointemp.com",
  //   tags: ["React", "NextJS", "SCSS", "API"],
  // },
  // {
  //   id: 4,
  //   title: "Create HTML Boilerplate",
  //   desc: "Generate a vanilla HTML boilerplate in a flash!",
  //   img: "/static/projects/create-html-boilerplate.png",
  //   github: "https://github.com/BraydenTW/create-html-boilerplate",
  //   tags: ["Node", "Javascript", "NPM", "HTML"],
  // },
  // {
  //   id: 5,
  //   title: "8 Ball in your CLI",
  //   desc: "An 8 ball simulation in your CLI built with Rust!",
  //   img: "/static/projects/8ball-rust.png",
  //   github: "https://github.com/BraydenTW/8ball-rust",
  //   tags: ["Rust", "CLI", "Game"],
  // },
  // {
  //   id: 6,
  //   title: "DontLeaveMe 😭",
  //   desc: "Beg for users to stay on your website.",
  //   img: "/static/projects/dontleaveme.png",
  //   link: "https://github.com/BraydenTW/dontleaveme/",
  //   tags: ["Javascript", "NPM"],
  // },
  // {
  //   id: 7,
  //   title: "Madlibs",
  //   desc: "A simple version of Madlibs built for the web!",
  //   img: "/static/projects/madlibs.png",
  //   link: "https://fillemin.netlify.app/",
  //   github: "https://github.com/braydentw/madlibs",
  //   tags: ["HTML", "CSS", "Javascript"],
  // },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects