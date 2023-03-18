import React, { useState } from "react";
import AlbumContext from "../container/AlbumContext";
import TextSettingsModal from "./TextSettingsModal";

const FieldsPanel = () => {
  const [showingModal, setShowingModal] = useState(false);
  const [textSettings, setTextSettings] = useState({});

  const openTextSettingsModal = (field) => {
    setTextSettings({field: field});
    setShowingModal(true);
  }

  const updateText = (settings) => {
    console.log(`!!! TODO: update text settings with: ${JSON.stringify(settings, null, 2)}`);
    setShowingModal(false);
  }

  return (
    <>
      {showingModal &&
        <TextSettingsModal textSettings={textSettings}
                           onSubmit={() => updateText(textSettings)}
                           onCancel={() => setShowingModal(false)}
        />
      }

      <AlbumContext.Consumer>
        {({title, onChangeTitle, artist, onChangeArtist, artwork, onChangeArtwork}) => (
          <div className={`panel fields ${showingModal ? 'blurred' : ''}`}>
            <div className="field">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" defaultValue={title} onChange={(e) => onChangeTitle(e.target.value)} />
              <img src="/settings.svg" onClick={(e) => openTextSettingsModal('title')} />
            </div>

            <div className="field">
              <label htmlFor="artist">Artist</label>
              <input type="text" name="artist" defaultValue={artist} onChange={(e) => onChangeArtist(e.target.value)} />
              <img src="/settings.svg" onClick={(e) => openTextSettingsModal('artist')} />
            </div>

            <label htmlFor="artwork">Artwork (URL)</label>
            <input type="text" name="artwork" defaultValue={artwork} onChange={(e) => onChangeArtwork(e.target.value)} />
          </div>
        )}
      </AlbumContext.Consumer>
    </>
  );
};

export default FieldsPanel;