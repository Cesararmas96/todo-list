import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {ListConteinerStyle} from './styles'
import List from '../List'

const ListConteiner = ({todos, handleOnDragEnd, changeStatus, deleteTodo, filter}) => {
  return(
    <ListConteinerStyle>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul className="todos" {...provided.droppableProps} ref={provided.innerRef}>
              {


               todos.map((todo, index ) => {
                return(
              (filter === 'all' ||
              (filter === 'completed' && todo.status) ||
              (filter === 'active' && !todo.status)) && (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided) => (
                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <List key={todo.id} todo={todo} deleteTodo={deleteTodo} changeStatus={changeStatus}/>
                    </li>
                    )
                   }
                  </Draggable>
                  )
                  )
                })}
              {provided.placeholder}
            </ul>
            )
          }
        </Droppable>
      </DragDropContext>
    </ListConteinerStyle>
  )
}

export default ListConteiner;

