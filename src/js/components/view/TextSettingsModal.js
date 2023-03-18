import React from "react";

const TextSettingsModal = (props) => {
  const { textSettings, onSubmit, onCancel } = props;

  console.log(`!!! textSettings=${JSON.stringify(textSettings, null, 2)}`);

  return (
    <div className="modal fields">
      <h2>Change {textSettings.field} settings</h2>

      <div className="field">
        <label htmlFor="font">Font</label>
      </div>

      <div className="field">
        <label htmlFor="color">Color</label>
      </div>

      <div className="field">
        <label htmlFor="size">Size</label>
      </div>

      <div>
        <button onClick={() => onCancel()}>Cancel</button>
        <button onClick={() => onSubmit()}>Submit</button>
      </div>
    </div>
  );
};

export default TextSettingsModal;