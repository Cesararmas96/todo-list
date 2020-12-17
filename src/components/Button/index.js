import React  from 'react'
import { Boton } from './styles.js'

const Button = ({changeStatus, id, status, left}) => {

	const handleClick = () => {
		if(changeStatus){
			changeStatus(id)
		}
	}

	return(
		<Boton
			onClick={handleClick}
      status={status}
			type="button">
		</Boton>
		)
} 

export default Button;