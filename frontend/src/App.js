import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoListView from './TodoListView';


function App() {

  const [todoList, setTodoList] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');



  // Read all todos
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/todo');
        console.log(response);
        setTodoList(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
  
    fetchTodos();
  }, []);

  const addTodoHandler = async () => {
    setTitleError('');
    setDescriptionError('');

  // Validate inputs
  if (!title.trim()) {
    setTitleError('Title cannot be empty');
    return;
  }
  if (!description.trim()) {
    setDescriptionError('Description cannot be empty');
    return;
  }
    // Check if title or description is empty
    if (!title.trim() || !description.trim()) {
      console.error('Title or Description cannot be empty');
      return; // Exit early if either is empty
    }
  
    try {
      const response = await axios.post('http://localhost:8000/api/todo', {
        title: title,
        description: description
      });
      console.log(response);
      setTodoList([...todoList, response.data]);
      setTitle(''); // Clear input after successful addition
      setDescription(''); // Clear input after successful addition
      
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
      <div className='App list-group-item justify-content-center align-items-center mx-auto'
      style={{"width": '400px', "backgroundColor":"white", "marginTop":"15px"}}>

        <h1 className='card text-white bg-primary mb-1'
        stylename="max-width: 20rem;">Task Manager</h1>
        <h6 className='card text-white bg-primary mb-3'>FASTAPI - React - MongoDB</h6>

        <div className='card-body'>
          <h5 className='card text-white bg-dark mb-3'>Add Your Task</h5>
          <span className='card-text'>

            <input className='mb-2 form-control titleIn' onChange={event => setTitle(event.target.value)} placeholder='Title/' value={title}/>
            {titleError && <div className="text-danger">{titleError}</div>}
            <input className='mb-2 form-control titleIn' onChange={event => setDescription(event.target.value)} placeholder='Description/' value={description}/>
            {descriptionError && <div className="text-danger">{descriptionError}</div>}
            
            <button className='btn btn-outline-primary mx-2 mb-3'
            style={{ borderRadius: "50px", fontWeight: "bold" }}
            onClick={addTodoHandler}>Add Task</button>
          </span>

          <h5 className='card text-white bg-dark mt-3 mb-3'>Your Tasks</h5>
          <div>
          <TodoListView todoList={todoList} setTodoList={setTodoList} />
          </div>
        </div>
        <h6 className='card text-dark bg-warning py-2 mb-1'>Copyright 2024, All rights reserved</h6>
      </div>
  );
}

export default App;
