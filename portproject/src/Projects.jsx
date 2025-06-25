import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "CRUD Project",
    description: "A full CRUD app with Create, Read, Update, Delete features built using React and localStorage.",
    live: "https://crud-livid-one.vercel.app/",
    github: "https://github.com/sagar0kaushik/crud"
  },
  {
    title: "Password Generator",
    description: "A powerful password generator that lets users create secure passwords with adjustable options and copy to clipboard.",
    live: "https://password-maker-sagarkaushik584-gmailcoms-projects.vercel.app/",
    github: "https://github.com/sagar0kaushik/password-maker-"
  },
  {
    title: "Portfolio Website",
    description: "This personal portfolio website you're on now! Built using React, animations, dark/light mode, and smooth routing.",
    live: "#",
    github: "https://github.com/yourusername/portfolio-site"
  },
  {
    title: "React Calculator",
    description: "A clean, responsive calculator app built using React with full keyboard support and live preview functionality.",
    live: "https://react-cal-sagarkaushik584-gmailcoms-projects.vercel.app/",
    github: "https://github.com/sagar0kaushik/react-cal"
  },
  {
    title: "To-Do List App",
    description: "A modern to-do list app with task management, localStorage persistence, and minimal UI.",
    live: "https://todo-sagarkaushik584-gmailcoms-projects.vercel.app/",
    github: "https://github.com/sagar0kaushik/todo"
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-heading">🚀 My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn live-btn">🌐 Live Demo</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn code-btn">💻 GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;



















// import React from 'react';
// import './Projects.css';

// const projects = [
//   {
//     title: "CRUD Project",
//     description: "A simple web CRUD app where users can Create, Read, Update, and Delete data in a user-friendly interface using React.",
//     live: "https://crud-livid-one.vercel.app/",
//     github: "https://github.com/yourusername/crud-project" // optional
//   },
//   {
//     title: "Password Generator",
//     description: "Secure Password Generator app that lets users create strong, custom passwords with adjustable length and character options.",
//     live: "https://password-maker-sagarkaushik584-gmailcoms-projects.vercel.app/",
//     github: "https://github.com/yourusername/password-generator" // optional
//   },
//   {
//     title: "Personal Portfolio Website",
//     description: "A responsive, animated portfolio website built with React, featuring light/dark mode, image animations, and clean routing.",
//     live: "https://your-portfolio-url.com", // put actual link when deployed
//     github: "https://github.com/yourusername/portfolio-site"
//   }
// ];

// function Projects() {
//   return (
//     <div className="projects-page">
//       <h2 className="section-title">My Projects</h2>
//       <div className="projects-container">
//         {projects.map((project, index) => (
//           <div className="project-card" key={index}>
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <div className="project-links">
//               <a href={project.live} target="_blank" rel="noopener noreferrer">
//                 🚀 Live Demo
//               </a>
//               {project.github && (
//                 <a href={project.github} target="_blank" rel="noopener noreferrer">
//                   💻 GitHub
//                 </a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;














// import React from 'react';
// import './Projects.css';

// function Projects() {
//   return (
//     <section className="projects-section">
//       <h2>My Projects</h2>
//       <div className="projects-grid">
//         <div className="project-card">Project 1</div>
//         <div className="project-card">Project 2</div>
//         <div className="project-card">Project 3</div>
//       </div>
//     </section>
//   );
// }

// export default Projects;
