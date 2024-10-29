import React from "react";
import "./styles/Tag.css";

// props -> {parent_property1, parent_property2,...} is also the way of passing parameters.
const Tag = ({ tagName, selectTag, checkedTag }) => {
  const inlineCSS = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    Angular: { backgroundColor: "#7fcd29" },
    default: { backgroundColor: "#f9f9f9" },
  };

  return (
    <button
      type="button" // by default type is submit, we need to make it button.
      className="tag"
      style={checkedTag ? inlineCSS[tagName] : inlineCSS.default} // inline CSS for styling the tags.
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
