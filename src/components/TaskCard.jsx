import React from "react";
import "./styles/TaskCard.css";
import deleteIcon from "../assets/delete.png";
import Tag from "./Tag";

const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} checkedTag={true} />
          ))}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} alt="delete" className="delete_icon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
