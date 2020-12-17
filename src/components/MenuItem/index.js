import React, {useState, useEffect} from 'react'
import { ItemStyle } from './styles.js'


const MenuItem = ({text, value, filter, changeFilterMenu}) => {
	const [active, setActive] = useState(false);

	useEffect(() => {
		if(filter===value){
			setActive(true)
		}else{
			setActive(false)
		}
	},[filter, value])

	return(
		<ItemStyle 
			active={active}
			onClick={() => changeFilterMenu(value)}
			>
			{text}

		</ItemStyle>
		)
}

export default MenuItem