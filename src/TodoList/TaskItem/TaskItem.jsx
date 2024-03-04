import React from "react";

const TaskItem = ({ element, onDelete, showDeleteButton }) => {
    return (
        <li>
            {element}
            {showDeleteButton && (
                <button onClick={onDelete} className="delete-button">
                    Delete
                </button>
            )}
        </li>
    );
};

export default TaskItem;