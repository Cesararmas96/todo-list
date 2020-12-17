import React, { useState, useEffect } from 'react';

import {
    TodoConteiner,
    Main,
    TextFooter,
} from './App.styles.js'

import Input from './components/Input'
import TopBar from './components/TopBar'
import Menu from './components/Menu'
import ItemsFooter from './components/ItemsFooter'
import ListConteiner from './components/ListContainer'


import { ThemeStore } from './contexts/ThemeStore'

import Theme from './Theme'

const App = () => {

  let todosIniciales = JSON.parse(localStorage.getItem('todos'));


    if (!todosIniciales) {
        todosIniciales = []
    }

  const [todos, setTodos] = useState(todosIniciales)

  let filterInicial = localStorage.getItem('filters');
  if(!filterInicial){ filterInicial = 'all' } 
  const [filter, setFilter] = useState(filterInicial)


  useEffect(() => {
      let todosIniciales = JSON.parse(localStorage.getItem('todos'))

      if (todosIniciales) {
          localStorage.setItem("todos", JSON.stringify(todos))
      } else {
          localStorage.setItem("todos", JSON.stringify([]))
      }

      localStorage.setItem('filters', filter)
  }, [todos, filter])

    const createTodo = (todo) => {
        setTodos([...todos, todo])
    }

    const handleOnDragEnd = (result) => {
      if (!result.destination) return;
      const items = Array.from(todos);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setTodos(items)
    }

    const deleteTodo = (id) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos)
    }

    const changeStatus = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                status: !todo.status,
              }
            : todo
          )
        );
    };

    const clearCompleted = () => {
      setTodos(todos.filter((todo) => !todo.status)) 
    }

    const changeFilterMenu = (filterMenu) => {
      setFilter(filterMenu);
    };

    return (
      <ThemeStore>
      <Theme>
        <Main>
          <TodoConteiner>
            <TopBar/>
            <Input createTodo={createTodo}/>
            <ListConteiner 
              todos={todos}
              handleOnDragEnd={handleOnDragEnd}
              changeStatus={changeStatus}
              deleteTodo={deleteTodo}
              filter={filter}
            />
            <ItemsFooter todos={todos} clearCompleted={clearCompleted}/>
            <Menu
              filter={filter}
              changeFilterMenu={changeFilterMenu}
              todos={todos}
            />
            <TextFooter>Drag and drop to reorder list</TextFooter>
          </TodoConteiner>
        </Main>
      </Theme>
    </ThemeStore>
    );
}

export default App;