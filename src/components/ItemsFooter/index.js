import React from 'react'
import Counter from '../Counter'
import { Footer, Clear } from './styles'

const ItemsFooter = ({todos, clearCompleted}) => {
	return(
		  <Footer>
        <Counter todos={todos}/>
        <Clear onClick={() => clearCompleted()}>Clear Completed</Clear>
      </Footer>
		)
}

export default ItemsFooter;