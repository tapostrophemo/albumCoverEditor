import React, { useContext } from "react";
import AlbumContext from "../container/AlbumContext";
import Draggable from "react-draggable";

const PreviewPanel = () => {
  const album = useContext(AlbumContext);

  return (
    <div className="panel preview">
      <Draggable bounds={".preview"}>
        <h1 className="title">{album.title}</h1>
      </Draggable>
      <Draggable bounds={".preview"}>
        <h2 className="artist">{album.artist}</h2>
      </Draggable>
      <img className="artwork" src={album.artwork} />
    </div>
  );
};

export default PreviewPanel;