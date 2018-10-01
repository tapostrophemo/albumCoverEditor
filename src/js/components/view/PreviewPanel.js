import React from "react";

const PreviewPanel = ({ title, artist, artwork }) => {
  return (
    <div className="panel preview">
      <h1 className="title">{title}</h1>
      <h2 className="artist">{artist}</h2>
      <img className="artwork" src={artwork} />
    </div>
  );
};

export default PreviewPanel;
