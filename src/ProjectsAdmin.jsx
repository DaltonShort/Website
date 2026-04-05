import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: "", link: "", description: "", imageUrl: "", tags: "", github: "" });
  const [misc, setMisc] = useState([]);
  const [newMisc, setNewMisc] = useState({ title: "", link: "", description: "", imageUrl: "", tags: "", github: "" });

  // Load projects from Firestore
  useEffect(() => {
    const fetchData = async () => {
      const projSnap = await getDocs(collection(db, "projects"));
      setProjects(projSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      const miscSnap = await getDocs(collection(db, "miscellaneous"));
      setMisc(miscSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);


  // Add project
  const addProject = async () => {
    try {
      const projectData = {
        ...newProject,
        tags: newProject.tags ? newProject.tags.split(',').map(t => t.trim()) : []
      };
      const docRef = await addDoc(collection(db, "projects"), projectData);
      setProjects([...projects, { ...projectData, id: docRef.id }]);
      setNewProject({ title: "", link: "", description: "", imageUrl: "", tags: "", github: "" });
    } catch (err) {
      console.error('Error adding project:', err);
      alert('Error adding project: ' + err.message);
    }
  };

  // Delete project
  const removeProject = async (id) => {
    await deleteDoc(doc(db, "projects", id));
    setProjects(projects.filter(p => p.id !== id));
  };

  // Add misc project
  const addMisc = async () => {
    try {
      const miscData = {
        ...newMisc,
        tags: newMisc.tags ? newMisc.tags.split(',').map(t => t.trim()) : []
      };
      const docRef = await addDoc(collection(db, "miscellaneous"), miscData);
      setMisc([...misc, { ...miscData, id: docRef.id }]);
      setNewMisc({ title: "", link: "", description: "", imageUrl: "", tags: "", github: "" });
    } catch (err) {
      console.error('Error adding misc:', err);
      alert('Error adding misc: ' + err.message);
    }
  };

  // Delete misc project
  const removeMisc = async (id) => {
    await deleteDoc(doc(db, "miscellaneous", id));
    setMisc(misc.filter(m => m.id !== id));
  };

  return (
    <div>
      <h2>Projects Management</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong>
            {p.link && (
              <>
                <br />
                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', wordBreak: 'break-all' }}>{p.link}</a>
              </>
            )}
            : {p.description}
            {p.fileUrl && <a href={p.fileUrl} target="_blank" rel="noopener noreferrer">[File]</a>}
            <button onClick={() => removeProject(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Add Project</h3>
      <input
        placeholder="Title"
        value={newProject.title}
        onChange={e => setNewProject({ ...newProject, title: e.target.value })}
      />
      <input
        placeholder="Link (optional)"
        value={newProject.link}
        onChange={e => setNewProject({ ...newProject, link: e.target.value })}
      />
      <input
        placeholder="Image URL (optional)"
        value={newProject.imageUrl}
        onChange={e => setNewProject({ ...newProject, imageUrl: e.target.value })}
      />
      <input
        placeholder="Tags (comma-separated, optional)"
        value={newProject.tags}
        onChange={e => setNewProject({ ...newProject, tags: e.target.value })}
      />
      <input
        placeholder="GitHub URL (optional)"
        value={newProject.github}
        onChange={e => setNewProject({ ...newProject, github: e.target.value })}
      />
      <input
        placeholder="Description"
        value={newProject.description}
        onChange={e => setNewProject({ ...newProject, description: e.target.value })}
      />
      <button onClick={addProject}>Add</button>

      <h2>Miscellaneous Projects Management</h2>
      <ul>
        {misc.map((m) => (
          <li key={m.id}>
            <strong>{m.title}</strong>
            {m.link && (
              <>
                <br />
                <a href={m.link} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', wordBreak: 'break-all' }}>{m.link}</a>
              </>
            )}
            : {m.description}
            {m.fileUrl && <a href={m.fileUrl} target="_blank" rel="noopener noreferrer">[File]</a>}
            <button onClick={() => removeMisc(m.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Add Miscellaneous Project</h3>
      <input
        placeholder="Title"
        value={newMisc.title}
        onChange={e => setNewMisc({ ...newMisc, title: e.target.value })}
      />
      <input
        placeholder="Link (optional)"
        value={newMisc.link}
        onChange={e => setNewMisc({ ...newMisc, link: e.target.value })}
      />
      <input
        placeholder="Image URL (optional)"
        value={newMisc.imageUrl}
        onChange={e => setNewMisc({ ...newMisc, imageUrl: e.target.value })}
      />
      <input
        placeholder="Tags (comma-separated, optional)"
        value={newMisc.tags}
        onChange={e => setNewMisc({ ...newMisc, tags: e.target.value })}
      />
      <input
        placeholder="GitHub URL (optional)"
        value={newMisc.github}
        onChange={e => setNewMisc({ ...newMisc, github: e.target.value })}
      />
      <input
        placeholder="Description"
        value={newMisc.description}
        onChange={e => setNewMisc({ ...newMisc, description: e.target.value })}
      />
      <button onClick={addMisc}>Add</button>
    </div>
  );
}

export default ProjectsAdmin;
