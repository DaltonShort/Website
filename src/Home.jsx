import React from 'react';

import profileImg from './assets/image.jpg';

function Home() {
  return (
    <section className="hero-section">
      <div
        className="hero-content"
        style={{
          maxWidth: '900px',
          width: '100%',
          textAlign: 'left',
          padding: '2.5rem 3rem',
        }}
      >
        <img 
          src={profileImg}
          alt="Dalton J. Short" 
          style={{
            display: 'block',
            maxWidth: '440px',
            width: '100%',
            height: 'auto',
            margin: '0 auto 2rem auto',
            borderRadius: '1rem',
            boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)'
          }}
        />
        <h1>Dalton J. Short</h1>
        <h2>Software Engineer</h2>
        <p>
          Dalton J. Short is a software engineer with a strong foundation in full-stack development, algorithmic problem-solving, and modern engineering workflows. He holds a Bachelor of Science in Computer Science (Magna Cum Laude, GPA: 3.72) from Southern New Hampshire University and an Associate of Arts in Biology & Environmental Sciences from Hillsborough Community College. He is also a ServiceNow Certified System Administrator (CSA), demonstrating validated expertise in enterprise platform configuration and system management.
          <br /><br />
          Dalton’s technical background spans both front-end and back-end development, with experience in Java, Python, and C++, alongside foundational knowledge in React, REST APIs, SQL, and Spring Boot. He applies strong data structures and algorithms knowledge to build efficient, maintainable systems, with particular emphasis on debugging, performance awareness, and clean architectural design.
          <br /><br />
          He has practical experience working within enterprise environments through his time with Cognixia, where he contributed to ServiceNow-based solutions. His work included analyzing system feasibility, configuring platform components, troubleshooting technical issues, and producing detailed technical documentation to support implementation decisions and stakeholder communication.
          <br /><br />
          His project work reflects a focus on applied problem-solving and independent system design. Notable examples include a Python-based YouTube-to-MP4 conversion utility, developed to replace unreliable third-party tools with a controlled, maintainable solution, and an AI-driven checkers opponent implementing Minimax with Alpha-Beta Pruning, demonstrating algorithmic optimization and decision modeling. He has also built and maintained personal server infrastructure, gaining hands-on experience with virtual environments, networking fundamentals, and system maintenance.
          <br /><br />
          Dalton demonstrates a consistent ability to translate ambiguous requirements into functional systems, supported by clear documentation and structured reasoning. He is particularly interested in AI and Generative AI applications, integrating modern tools into development workflows to enhance productivity, debugging efficiency, and code quality.
          <br /><br />
          His engineering approach prioritizes clarity, maintainability, and reliability, with the capacity to adapt quickly across technologies and contribute effectively in both collaborative and independent environments.
        </p>
      </div>
    </section>
  );
}

export default Home;
