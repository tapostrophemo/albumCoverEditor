import React from "react";
import Draggable from "react-draggable";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  title: state.title,
  artist: state.artist,
  artwork: state.artwork
});

const PreviewPanel = ({ title, artist, artwork }) => {

  return (
    <div className="panel preview">
      <Draggable bounds={".preview"}>
        <h1 className="title">{title}</h1>
      </Draggable>
      <Draggable bounds={".preview"}>
        <h2 className="artist">{artist}</h2>
      </Draggable>
      <img className="artwork" src={artwork} />
    </div>
  );
};

export default connect(mapStateToProps)(PreviewPanel);
