import React from "react";

import PreviewPanel from "./PreviewPanel";
import FieldsPanel from "./FieldsPanel";
import ButtonBar from "./ButtonBar";

const Editor = () => {
  return (
    <div className="flex-container">
      <PreviewPanel />
      <FieldsPanel />
      <ButtonBar />
    </div>
  );
};

export default Editor;
