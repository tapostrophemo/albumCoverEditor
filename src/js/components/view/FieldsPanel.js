import React from "react";
import { connect } from "react-redux";

import { updateTitle, updateArtist } from "../../actions/FieldActions";

const mapStateToProps = state => ({
  title: state.title,
  artist: state.artist,
  artwork: state.artwork
});

const mapDispatchToProps = dispatch => ({
  onChangeTitle: e => { dispatch(updateTitle(e.target.value)) },
  onChangeArtist: e => { dispatch(updateArtist(e.target.value)) }
});

const FieldsPanel = ({ title, artist, artwork, onChangeTitle, onChangeArtist }) => {
  return (
    <div className="panel fields">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" defaultValue={title} onChange={onChangeTitle} />

      <label htmlFor="artist">Artist</label>
      <input type="text" name="artist" defaultValue={artist} onChange={onChangeArtist} />

      <label htmlFor="artwork">Artwork</label>
      <input type="file" name="artwork" />
      <label className="help">Currently: {artwork}</label>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FieldsPanel);
