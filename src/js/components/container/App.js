import React, { useState } from "react";
import Editor from "../view/Editor";
import AlbumContext from "./AlbumContext";

const App = () => {
  const [title, setTitle] = useState("Traveling Man");
  const [artist, setArtist] = useState("Intense Son");
  const [artwork, setArtwork] = useState("https://via.placeholder.com/900x900");
  const album = {
    title: title,
    onChangeTitle: setTitle,
    artist: artist,
    onChangeArtist: setArtist,
    artwork: artwork,
  };

  return (
    <AlbumContext.Provider value={album}>
      <Editor />
    </AlbumContext.Provider>
  );
};

export default App;
