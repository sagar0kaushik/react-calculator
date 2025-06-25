import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import profileImg from './assets/profile.jpg';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef();
   const navigate = useNavigate(); // 👈 this is the magic

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);
    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact'); // 👈 direct routing when clicked
  };

  return (
    <div className="main-section" id="home">
      <div
        className={`text-section ${isVisible ? 'fade-in' : ''}`}
        ref={textRef}
      >
        <p>Hello 👋, I'm</p>
        <h1>Sagar Kaushik</h1>
        <h2 className="job-title">Website Developer</h2>
        <p>2 Years of experience in Website Development.</p>
        {/* <button className="contact-button">Contact</button> */}
        <button className="contact-button" onClick={handleContactClick}>
          Contact
        </button>
      </div>

      <div className="pulse-container">
        <img src={profileImg} alt="Sagar Kaushik" className="pulse-img" />
      </div>
    </div>
  );
}

export default Home;




















// import React, { useState } from 'react';
// import './Home.css';
// import profileImg from './assets/profile.jpg'; // front image

// function Home() {
//   const [flipped, setFlipped] = useState(false);

//   const toggleFlip = () => {
//     setFlipped(!flipped);
//   };

//   return (
//     <div className="main-section" id="home">
//       <div className="text-section">
//         <p>Hello 👋, I'm</p>
//         <h1>Sagar Kaushik</h1>
//         <h2 className="job-title">Website Developer</h2>
//         <p>2 Years of experience in Website Development.</p>
//         <button className="contact-button">Contact</button>
//       </div>

//       <div className={`flip-container ${flipped ? 'flipped' : ''}`} onClick={toggleFlip}>
//         <div className="flipper">
//           <div className="front">
//             <img src={profileImg} alt="Sagar Front" />
//           </div>
//           <div className="back">
//             <div className="back-content">
//               <p>🌟 Passionate Coder</p>
//               <p>🚀 Always Learning</p>
//               <p>💻 React Enthusiast</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


















// import React from 'react';
// import profileImg from './assets/profile.jpg';
// import './Home.css';

// function Home() {
//   return (
//     <main className="main-section">
//       <div className="text-section">
//         <p>Hello 👋, I'm</p>
//         <h1>Sagar Kaushik</h1>
//         <h2 className="job-title">Website Developer</h2>
//         <p>2 Years of experience in Website Development.</p>
//         <button className="contact-button">Contact</button>
//       </div>
//       <div className="image-section">
//         <img src={profileImg} alt="Sagar Kaushik Avatar" />
//       </div>
//     </main>
//   );
// }

// export default Home;
