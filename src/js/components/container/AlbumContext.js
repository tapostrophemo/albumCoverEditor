import React from "react";

const AlbumContext = React.createContext({
  title: "",
  onChangeTitle: (s) => {},
  artist: "",
  onChangeArtist: (s) => {},
  artwork: "",
});

export default AlbumContext;