import React, {useState} from 'react';
import { MdDelete, MdEdit, MdSave} from 'react-icons/md';


function Todo(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(props.todo.description);

    const deleteTodoHandler = () => {
        try {
            props.onDelete();
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing); // Toggle editing mode
    };

    const saveChanges = () => {
        // Call parent component's onEdit function with updated description
        props.onEdit(editedDescription);
        setIsEditing(false); // Exit edit mode after saving
    };

    const handleDescriptionChange = (event) => {
        setEditedDescription(event.target.value);
    };

    return (
        <div className="todo-item d-flex align-items-center justify-content-between mb-3 p-2 border rounded">
            <div className="todo-title mx-1" style={{ fontWeight: 'bold', flex: 1 }}>
                {props.todo.title}:
            </div>
            {isEditing ? (
                <textarea
                    value={editedDescription}
                    onChange={handleDescriptionChange}
                    className="w-full h-auto p-2 border rounded"
                    rows={Math.max(3, Math.ceil(editedDescription.length / 50))}
                />
            ) : (
                <textarea
                    value={props.todo.description}
                    className="w-full h-auto p-2 border rounded"
                    readOnly
                    rows={Math.max(3, Math.ceil(props.todo.description.length / 50))}
                />
            )}
            {isEditing ? (
                <button
                    onClick={saveChanges}
                    className='btn btn-outline-primary my-2 mx-2 p-2 rounded-circle'
                    style={{ width: '40px', height: '40px', lineHeight: 0 }}
                >
                    <MdSave size={24} />
                </button>
            ) : (
                <button
                    onClick={toggleEdit}
                    className='btn btn-outline-primary my-2 mx-2 p-2 rounded-circle'
                    style={{ width: '40px', height: '40px', lineHeight: 0 }}
                >
                    <MdEdit size={24} />
                </button>
            )}
            <button
                onClick={() => deleteTodoHandler(props.todo.title)}
                className='btn btn-outline-danger my-2 mx-2 p-2 rounded-circle'
                style={{ width: '40px', height: '40px', lineHeight: 0 }}
            >
                <MdDelete size={24} />
            </button>
            <hr />
        </div>
    );
}

export default Todo;
