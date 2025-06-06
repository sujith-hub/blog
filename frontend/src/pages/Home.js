import React from 'react';

import '../index.css'; // Ensure CSS is imported

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Blog</h1>
      <p>Explore insights on growing stocks, job opportunities, and emerging technologies!</p>
      <div className="card-container">
        <div className="card">
          <h2>Growing Stocks</h2>
          <p>
            Discover the latest trends in the stock market, including high-growth sectors like
            renewable energy, AI, and biotech. Stay informed about investment opportunities to
            maximize your portfolio.
          </p>
          <a
            href="/blog?category=stocks"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More →
          </a>
        </div>
        <div className="card">
          <h2>Job Opportunities</h2>
          <p>
            Explore in-demand roles in tech, engineering, and more. From software development to
            IoT, find tips to land your dream job in today’s competitive market.
          </p>
          <a
            href="/blog?category=jobs"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More →
          </a>
        </div>
        <div className="card">
          <h2>Emerging Technologies</h2>
          <p>
            Stay ahead with insights on cutting-edge technologies like AI, blockchain, and IoT.
            Learn how these innovations are shaping the future of industries worldwide.
          </p>
          <a
            href="/blog?category=technologies"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More →
          </a>
        </div>
        <div className="card">
            <h2>Study Resources</h2>
            <p>
                Boost your academic journey with tips, resources, and strategies for effective learning.
                Explore study techniques, online courses, and tools to excel in your education.
            </p>
            <a
                href="/blog?category=study"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn More →
            </a>
        </div>
    </div>
    </div>
  );
};

export default Home;