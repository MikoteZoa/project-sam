import React, {useState, useEffect} from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = props => {
  const [todoList, setToDoList] = useState(JSON.parse(localStorage.getItem('todoList')));
  const [doneList, setDoneList] = useState(JSON.parse(localStorage.getItem('doneList')));

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem('doneList', JSON.stringify(doneList));
  }, [doneList]);

  function add () {
    const titleElement = document.getElementById("title");
    const descriptionElement = document.getElementById("description");

    if(titleElement.value === '') return;
    else {
      const _todoList = todoList.concat({
        title: titleElement.value,
        description: descriptionElement.value
      });

      setToDoList(_todoList);

      titleElement.value = '';
      descriptionElement.value = '';
    }
  }

  function remove(todo) {

    const _doneList = doneList.concat({
      title: todo.title,
      description: todo.description
    });

    setToDoList(todoList.filter(data => data !== todo))
    setDoneList(_doneList);
  }

  return (
    <div className="App">
        <div className="add-form">
          <div>
            <input id="title" placeholder="title" />
            <input id="description" placeholder="description" />
          </div>
          <div>
            <button
              type="button"
              onClick={() => add()}
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => props.history.push('/')}
            >
              Back
            </button>
          </div>
        </div>
        <div>
          {todoList.map(todo => (
            <ToDoListItem
              key={todo.title} //인덱스 역할(자기 넘버?)
              title={todo.title}
              description={todo.description}
              onClick={() => remove(todo)}
            />
          ))}
        </div>
      </div>
  )
}

export default ToDoList;
