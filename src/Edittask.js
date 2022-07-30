import React, {useState} from 'react';


function Edittask({id, text, saveChanges}) {

    const [editingInputValue, setEditingInputValue] = useState(text);

    const editingInputValueChange = (event) => {
        setEditingInputValue(event.target.value);
    };

    const handleSaveChanges = (e) => {
        e.stopPropagation();
        e.preventDefault();
        saveChanges(editingInputValue, id);
    };

    return (
        <div key={id}>
            <input type='text' value={editingInputValue} onChange={editingInputValueChange}></input>
            <button onClick={handleSaveChanges}>Save</button>
        </div>
    );
}

export default Edittask;