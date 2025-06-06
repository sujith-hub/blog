import React from 'react';

import '../index.css'; 
import gify from '../assets/gify.mp4'; 
import resume from '../assets/resume.pdf';
import sujito from '../assets/sujito.jpg'; 
import thank from '../assets/thank.jpg'; // Import image

const About = () => {
  // Fallback for error handling
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/200?text=Image+Not+Found'; // Fallback image
  };

  const handleVideoError = (e) => {
    console.error('Video failed to load:', e);
    e.target.poster = 'https://via.placeholder.com/50?text=Video+Not+Found'; // Fallback poster
  };

  return (
    <div className="about-container container">
      <div className="container3">
        <img
          src={sujito}
          alt="Sujith"
          width="200"
          onError={handleImageError}
        />
      </div>

      <div className="detail">
        <p className="p2">
          Hi there <span className="wave">👋</span>, Myself 19k4c9 Sujith
        </p>
        <video
          autoPlay
          loop
          src={gify}
          width="50"
          onError={handleVideoError}
        />
      </div>
      <div className="detail1">
        <p className="p2">
          Pursuing my M-tech in Electronics and Communication Engineering(SSP) at JNTU-UCESTH, India
        </p>
      </div>

      <div className="detail2">
        <ul>
          <li># Completed my schooling with 9.8 CGPA at SR NHS.</li>
          <li># Received my +2 certificate with a score of 935 out of 1000 from Sri Chaitanya Junior College.</li>
          <li># Alumini from SR Engineering College, Warangal, India</li>
          <li>
            # I am currently working on a book store{' '}
            <a href="https://genuine-liger-9112e7.netlify.app/" target="_blank" rel="noopener noreferrer">
              Bibilet-reading redefined
            </a>{' '}
            to rent or sell old books,{' '}
            <a href="/blog">My personal blog</a>,
          </li>
          <li># I am interested in IoT (embedded) and Web technologies.</li>
          <li># My hobbies are playing volleyball and social surfing.</li>
          <li># Besides studying, I am also good at drawing and painting.</li>
          <li>
            # Reach me by this <a href="/contact">link</a>.
          </li>
          <li># You can reach me for doubts in IoT, Web technology, and communication-related subjects.</li>
        </ul>
      </div>

      <div className="col-2">
        <p>Check my resume here</p>
        <a href={resume} className="btn" target="_blank" rel="noopener noreferrer">
          My resume →
        </a>
      </div>

      <div className="detail3">
        <p>To know more about me, please go through the resume above.</p>
        <p>To know about my social media profile, please check the footer below.</p>
      </div>

      <div className="detail4">
        <p>Thank you for visiting my blog</p>
        <img
          src={thank}
          alt="Thank You"
          width="100"
          height="100"
          onError={handleImageError}
        />
      </div>

      <div className="line">
        <hr />
      </div>
    </div>
  );
};

export default About;