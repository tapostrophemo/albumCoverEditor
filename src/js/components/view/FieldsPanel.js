import React from "react";
import AlbumContext from "../container/AlbumContext";

const FieldsPanel = () => {
  return (
    <AlbumContext.Consumer>
      {({title, onChangeTitle, artist, onChangeArtist, artwork, onChangeArtwork}) => (
        <div className="panel fields">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" defaultValue={title} onChange={(e) => onChangeTitle(e.target.value)} />

          <label htmlFor="artist">Artist</label>
          <input type="text" name="artist" defaultValue={artist} onChange={(e) => onChangeArtist(e.target.value)} />

          <label htmlFor="artwork">Artwork (URL)</label>
          <input type="text" name="artwork" defaultValue={artwork} onChange={(e) => onChangeArtwork(e.target.value)} />
        </div>
      )}
    </AlbumContext.Consumer>
  );
};

export default FieldsPanel;