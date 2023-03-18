import React from "react";

const AlbumContext = React.createContext({
  title: "",
  onChangeTitle: (s) => {},
  artist: "",
  onChangeArtist: (s) => {},
  artwork: "",
  onChangeArtwork: (s) => {},
});

export default AlbumContext;