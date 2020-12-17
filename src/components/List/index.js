import React from 'react'
import { 
	Task,
	Complete
 } from './styles.js'

import iconCross from './img/icon-cross.svg'

import Button from '../Button';

const List = ({todo, deleteTodo, changeStatus}) => {
	
	const { id, status, task } = todo;

	return(
		<Task>
			  <Button changeStatus={changeStatus} id={id} status={status} />	
			{ !status 
				? <p>{task}</p>

				: <Complete>{task}</Complete>
			}
       		<button>
       			<img src={iconCross} alt="icon cross" onClick={() => deleteTodo(id) }/>
       		</button>
        </Task>
        
	)
}

export default List