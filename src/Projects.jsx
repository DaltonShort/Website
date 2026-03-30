
import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const snap = await getDocs(collection(db, 'projects'));
      setProjects(snap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchProjects();
  }, []);
  return (
    <section className="projects-section">
      <h1>Software Engineering Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            {project.fileUrl && <a href={project.fileUrl} target="_blank" rel="noopener noreferrer">[File]</a>}
            <h2>{project.title}</h2>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', wordBreak: 'break-all', display: 'block', marginBottom: '0.5rem' }}>{project.link}</a>
            )}
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
