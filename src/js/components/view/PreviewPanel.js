import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  title: state.title,
  artist: state.artist,
  artwork: state.artwork
});

const PreviewPanel = ({ title, artist, artwork }) => {
  return (
    <div className="panel preview">
      <h1 className="title">{title}</h1>
      <h2 className="artist">{artist}</h2>
      <img className="artwork" src={artwork} />
    </div>
  );
};

export default connect(mapStateToProps)(PreviewPanel);
