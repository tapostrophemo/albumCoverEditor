import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  title: state.title,
  artist: state.artist,
  artwork: state.artwork
});

const PreviewPanel = ({ title, artist, artwork }) => {
  // TODO: make the positioning of title/artist design elements editable (prob. via click/drag)
  let titleStyle = {
    position: "absolute",
    top: 310 + "px",
    left: 155 + "px"
  };
  let artistStyle = {
    position: "absolute",
    top: 15 + "px",
    left: 40 + "px"
  };
  return (
    <div className="panel preview">
      <h1 className="title" style={titleStyle}>{title}</h1>
      <h2 className="artist" style={artistStyle}>{artist}</h2>
      <img className="artwork" src={artwork} />
    </div>
  );
};

export default connect(mapStateToProps)(PreviewPanel);
