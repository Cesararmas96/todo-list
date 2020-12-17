import React, {useEffect, useState }from 'react'

const Count = ({todos}) => {

	const [count, setCount] = useState(0)

	useEffect(() => {

		let counter = 0;
		todos?.forEach((todo)  => {
			if(!todo.status){
				counter++
			}
		})

		setCount(counter)
	}, [todos])

	return(
      <div>{count} items left</div> 
		)
}

export default Count