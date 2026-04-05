
import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const snap = await getDocs(collection(db, 'projects'));
        setProjects(snap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="projects-section">
      <h1>Software Engineering Projects</h1>
      {loading && <div className="loading">Loading projects...</div>}
      {error && <div className="error">{error}</div>}
      {!loading && !error && (
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id} onClick={() => setSelected(project)}>
              <div className="project-media">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title || 'project screenshot'} />
                ) : (
                  <div className="project-placeholder">{(project.title || '').slice(0,2).toUpperCase()}</div>
                )}
              </div>
              <div className="project-body">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-desc">{project.description}</p>
                <div className="project-meta">
                  {(project.tags || []).slice(0,4).map((t, i) => (
                    <span className="tag" key={i}>{t}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}><FaExternalLinkAlt /> Live</a>}
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}><FaGithub /> Code</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>×</button>
            <h2>{selected.title}</h2>
            {selected.imageUrl && <img className="modal-image" src={selected.imageUrl} alt={selected.title} />}
            <p>{selected.description}</p>
            {selected.details && <p className="modal-details">{selected.details}</p>}
            <div className="modal-links">
              {selected.link && <a href={selected.link} target="_blank" rel="noopener noreferrer">Open Live</a>}
              {selected.github && <a href={selected.github} target="_blank" rel="noopener noreferrer">View Code</a>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
