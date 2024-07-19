// ProjectCard.js

import React from 'react';

export const ProjectCard = ({ title, description, imgUrl }) => {
  const handleClick = () => {
    if (title === "Форум") {
      window.location.href = 'https://forum-olive.vercel.app/index.html';
    }
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <img src={imgUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
