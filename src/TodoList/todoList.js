import React, { useState } from "react";
import InputComponent from "./input/inputComponent";
import TaskItem from "./TaskItem/TaskItem";

function TodoList() {
    const [input, setInput] = useState('');
    const [item, setItem] = useState([]);
    const [showDeleteButton, setShowDeleteButton] = useState(false);

    const onClickHandler = () => {
        const newElement = input.trim();
        if (newElement !== '') {
            setItem(prevItems => [...prevItems, newElement]);
            setInput('');
            setShowDeleteButton(true);
        }
    };

    const handleDeleteItem = (index) => {
        let updatedItems = [...item];
        updatedItems.splice(index, 1);

        setItem(updatedItems);
        setShowDeleteButton(updatedItems.length > 0);
    };

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setInput(value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setItem([...item, input]);
            setInput('');
            setShowDeleteButton(true);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <InputComponent
                    value={input}
                    onChange={onChangeHandler}
                    onKeyDown={handleKeyDown}
                    onClick={onClickHandler}
                />
                <ul>
                    {item.map((element, index) => (
                        <TaskItem
                            key={index}
                            element={element}
                            onDelete={() => handleDeleteItem(index)}
                            showDeleteButton={showDeleteButton}
                        />
                    ))}
                </ul>
            </header>
        </div>
    );
}

export default TodoList;