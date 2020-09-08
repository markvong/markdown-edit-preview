import React, { useState } from "react";
import marked from "marked";
import MarkUp from "interweave";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpandArrowsAlt,
  faCompressAlt
} from "@fortawesome/free-solid-svg-icons";

export const Editor = () => {
  const h1String = "# This is H1";
  const h2String = "## This is H2";
  const h3String = "### This is H3";
  const inlineCode = "`This is inline code: <div>`";
  const codeBlock =
    "```\nconst codeBlock = () => {\n\tconst var;\n\treturn ans;\n}\n```";
  const listItem = "- List Item \n\t - Indented List Item";
  const blockQuote = "> Block quote!";
  const image =
    "![Alt text](https://i.pinimg.com/originals/32/e2/41/32e2413585f1d2e0333c7dee3c4808bf.jpg)";
  const boldedText = "**Bolded Text**";
  const italicText = "_Italic Text_";
  const defaultString =
    h1String +
    "\n---\n" +
    h2String +
    "\n---\n" +
    h3String +
    "\n---\n" +
    inlineCode +
    "\n\n" +
    codeBlock +
    "\n\n" +
    listItem +
    "\n\n" +
    blockQuote +
    "\n\n" +
    image +
    "\n\n" +
    boldedText +
    "\n\n" +
    italicText +
    "\n\n";

  let [text, setText] = useState(defaultString);
  let [editorStyle, setEditorStyle] = useState({
    height: "50vh",
    width: "60vw"
  });
  let [previewStyle, setPreviewStyle] = useState({ width: "80vw" });

  let [editorCompressStyle, setEditorCompressStyle] = useState({
    display: "none"
  });
  let [editorExpandStyle, setEditorExpandStyle] = useState({
    display: "block"
  });
  let [editorExpand, setEditorExpand] = useState(false);
  let [previewCompressStyle, setPreviewCompressStyle] = useState({
    display: "none"
  });
  let [previewExpandStyle, setPreviewExpandStyle] = useState({
    display: "block"
  });
  let [previewExpand, setPreviewExpand] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleEditorExpand = () => {
    if (editorExpand) {
      setEditorStyle({
        ...editorStyle,
        height: "50vh",
        width: "60vw",
        margin: "2rem 0 1rem 0"
      });
      setEditorCompressStyle({ display: "none" });
      setEditorExpandStyle({ display: "block" });
      setPreviewStyle({ ...previewStyle, display: "block" });
    } else {
      setEditorStyle({
        ...editorStyle,
        width: "100%",
        height: "100vh",
        margin: "0"
      });
      setEditorCompressStyle({ display: "block" });
      setEditorExpandStyle({ display: "none" });
      setPreviewStyle({ ...previewStyle, display: "none" });
    }
    setEditorExpand(!editorExpand);
  };
  const handlePreviewExpand = () => {
    if (previewExpand) {
      setPreviewStyle({
        ...previewStyle,
        width: "80vw",
        height: "auto",
        margin: "2rem 0 1rem 0"
      });
      setPreviewExpandStyle({ display: "block" });
      setPreviewCompressStyle({ display: "none" });
      setEditorStyle({ ...editorStyle, display: "block" });
    } else {
      setPreviewStyle({
        ...previewStyle,
        width: "100%",
        height: "100vh",
        margin: "0 0 1rem 0"
      });
      setPreviewExpandStyle({ display: "none" });
      setPreviewCompressStyle({ display: "block" });
      setEditorStyle({ ...editorStyle, display: "none" });
    }
    setPreviewExpand(!previewExpand);
  };

  return (
    <div id="div-container">
      <div className="a-div" id="editor-div" style={editorStyle}>
        <div className="title-bar">
          <h1 className="title" id="editor-title">
            Editor
          </h1>
          <FontAwesomeIcon
            className="icon"
            icon={faExpandArrowsAlt}
            onClick={handleEditorExpand}
            id="editor-expand"
            style={editorExpandStyle}
          />
          <FontAwesomeIcon
            className="icon"
            icon={faCompressAlt}
            id="editor-compress"
            onClick={handleEditorExpand}
            style={editorCompressStyle}
          />
        </div>
        <textarea
          id="editor"
          spellCheck="false"
          onChange={handleChange}
          defaultValue={defaultString}
        >
          {/* {defaultString} */}
        </textarea>
      </div>
      <div className="a-div" id="preview-div" style={previewStyle}>
        <div className="title-bar">
          <h1 className="title" id="preview-title">
            Preview
          </h1>
          <FontAwesomeIcon
            className="icon"
            icon={faExpandArrowsAlt}
            style={previewExpandStyle}
            onClick={handlePreviewExpand}
          />
          <FontAwesomeIcon
            className="icon"
            icon={faCompressAlt}
            style={previewCompressStyle}
            onClick={handlePreviewExpand}
          />
        </div>
        <div id="preview">
          {/* {marked(text)} */}
          <MarkUp content={marked(text)} />
        </div>
      </div>
    </div>
  );
};
