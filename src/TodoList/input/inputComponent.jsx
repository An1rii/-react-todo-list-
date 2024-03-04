import React from "react";

const InputComponent = ({ value, onChange, onKeyDown, onClick }) => {
    return (
        <div className="input-container">
            <input
                onChange={onChange}
                value={value}
                placeholder="Додати завдання..."
                onKeyDown={onKeyDown}
                type="text"
            />
            <button className="button-class" onClick={onClick}>
                Add Task
            </button>
        </div>
    );
};

export default InputComponent;
