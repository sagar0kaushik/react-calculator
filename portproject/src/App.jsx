import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <Router>
      <div className="container">
        <header className="navbar">
          <div className="logo">
            <span className="logo-box">SAGAR</span>
            <span className="logo-text">KAUSHIK</span>
          </div>

          <nav>
            <ul className="nav-links">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT ME</Link></li>
              <li><Link to="/projects">PORTFOLIO</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
              <li>
                <a href="/Sagar_CV.pdf" download className="cv-button">
                  Download CV
                </a>
              </li>
              <li>
                <button className="mode-toggle" onClick={() => setDarkMode(prev => !prev)}>
                  {darkMode ? '☀️ Light' : '🌙 Dark'}
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

















// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// import Home from './Home';
// import About from './About';
// import Projects from './Projects';
// import Contact from './Contact';

// function App() {
//   const [darkMode, setDarkMode] = useState(true);

//   useEffect(() => {
//     document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
//   }, [darkMode]);

//   return (
//     <Router>
//       <div className="container">
//         <header className="navbar">
//           <h1 className="logo">Sagar Kaushik</h1>
          

//           <nav>
//             <ul className="nav-links">
//               <li><Link to="/">HOME</Link></li>
//               <li><Link to="/about">ABOUT ME</Link></li>
//               <li><Link to="/projects">PORTFOLIO</Link></li>
//               <li><Link to="/contact">CONTACT</Link></li>
//               {/* <li><button className="cv-button">CV</button></li> */}
//               {/* ✅ Real CV download link */}
//               <li>
//                 <a href="/Sagar_CV.pdf" download className="cv-button">
//                   Download CV
//                 </a></li>
//               <li>
//                 <button className="mode-toggle" onClick={() => setDarkMode(prev => !prev)}>
//                   {darkMode ? '☀️ Light' : '🌙 Dark'}</button></li>
//             </ul>
//           </nav>
//         </header>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;




























// import React from 'react';
// import './App.css';
// import profileImg from './assets/profile.jpg'; // Make sure the image is here

// function App() {
//   return (

//     <div className="container">
//       <header className="navbar">
//         <h1 className="logo">Sagar Kaushik</h1>
//         <nav>
//           <ul className="nav-links">
//             <li><a href="#home">HOME</a></li>
//             <li><a href="#about">ABOUT ME</a></li>
//             <li><a href="#portfolio">PORTFOLIO</a></li>
//             <li><a href="#contact">CONTACT</a></li>
//             <li><button className="cv-button">CV</button></li>
//           </ul>
//         </nav>
//       </header>

//       <main className="main-section" id="home">
//         <div className="text-section">
//           <p>Hello 👋, I'm</p>
//           <h1>Sagar Kaushik</h1>
//           <h2 className="job-title">Website Developer</h2>
//           <p>2 Years of experience in Website Development.</p>
//           <button className="contact-button">Contact</button>
//         </div>
//         <div className="image-section">
//           <img src={profileImg} alt="Sagar Kaushik Cartoon Avatar" />
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;


















// import React from 'react';
// import profileImg from './assets/profile.jpg'; // Replace with your actual image

// function App() {
//   return (
//     <div className="container">
//       <div className="text-section">
//         <h1>I'M <span>MOHAMMAD ARIF</span></h1>
//         <p>This is my official portfolio website to showcase my all works related to web development.</p>
//         <a href="#" className="btn">Download CV</a>
//       </div>
//       <div className="img-section">
//         <img src={profileImg} alt="Profile" />
//       </div>
//     </div>
//   );
// }

// export default App;
