// src/pages/Profile.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: 'João Pedro',
    email: 'joao@email.com',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
  });

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ name: user.name, email: user.email });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser({ ...user, ...formData });
    setEditing(false);
  };

  return (
    <div className="profile-container">
      <img src={user.avatar} alt="Avatar" className="profile-avatar" />

      {editing ? (
        <>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="profile-input"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="profile-input"
          />
          <button onClick={handleSave} className="profile-save-button">Salvar</button>
        </>
      ) : (
        <>
          <h1 className="profile-name">{user.name}</h1>
          <p className="profile-email">{user.email}</p>
          <button onClick={() => setEditing(true)} className="profile-edit-button">Editar Perfil</button>
        </>
      )}

      <button onClick={() => navigate('/')} className="profile-back-button">Voltar ao Início</button>
    </div>
  );
};

export default Profile;
