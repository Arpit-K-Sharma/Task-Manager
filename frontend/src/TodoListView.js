import React from 'react';
import Todo from './Todo'; 
import axios from 'axios';


function TodoListView(props) {
  const { todoList, setTodoList } = props;

  const handleDelete = async (title) => {
    try {
      await axios.delete(`http://localhost:8000/api/todo${title}`);
      // Update todoList state after deletion
      const updatedTodoList = todoList.filter(todo => todo.title !== title);
      setTodoList(updatedTodoList);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleEdit = async (title, editedDescription) => {
    try {
        const response = await axios.put(`http://localhost:8000/api/todo`, {
            title: title,
            description: editedDescription
        });
        // Assuming response.data contains the updated todo object from backend
        const updatedTodo = response.data;

        // Update todoList state with the updated todo
        const updatedList = todoList.map(todo => {
            if (todo.title === updatedTodo.title) {
                return updatedTodo;
            }
            return todo;
        });
        setTodoList(updatedList);

    } catch (error) {
        console.error('Error editing todo:', error);
    }
};
  return (
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <Todo key={index} todo={todo} onDelete={() => handleDelete(todo.title)} onEdit={(editedDescription) => handleEdit(todo.title, editedDescription)}/>
        ))}
      </ul>
    </div>
  );
}

export default TodoListView;
