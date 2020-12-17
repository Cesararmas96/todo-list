import React, {useState} from 'react'
import {InputStyle}  from './index.styles.js'
import { v4 as uuidv4 } from 'uuid';


const Input = ({createTodo}) => {

	const [todo, setTodo] = useState({
		task:"",
		status: false,
	})

	const {task} = todo;

	const handleChange = (e) => {
		setTodo({
			...todo,
			[e.target.name]: e.target.value


		})
	}

	const submitTodo = (e) => {
		e.preventDefault();

		//Validar
		if (task.trim() === ""){
			return;
		} 
			//Asignar Id
		todo.id = uuidv4();

		createTodo(todo)

		setTodo({
			task: "",
			status: false
		})

	}


	return(
		<form onSubmit={submitTodo}>

			<InputStyle 
				type="text" 
				placeholder="Create a new todo..."
				name="task"
				value={task}
				onChange={handleChange}
			></InputStyle>
		</form>

		)
}

export default Input;

