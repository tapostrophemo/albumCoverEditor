import React from "react";

const FieldsPanel = () => {
  return (
    <div className="panel fields">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" />

      <label htmlFor="artist">Artist</label>
      <input type="text" name="artist" />

      <label htmlFor="artwork">Artwork</label>
      <input type="file" name="artwork" />
    </div>
  );
};

export default FieldsPanel;
