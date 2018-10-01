import React from "react";

class Editor extends React.Component {
  render() {
    return (
      <div class="flex-container">
        <div className="panel preview">[preview panel]</div>
        <div className="panel fields">[title/artist/artwork panel]</div>
        <div className="bar button-bar">[save/cancel button bar]</div>
      </div>
    );
  }
};

export default Editor;
