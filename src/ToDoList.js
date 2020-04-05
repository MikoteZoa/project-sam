import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ToDoListItem from './ToDoListItem';
import {addTodo, removeTodo} from './store/modules/TodoReducer';

const ToDoList = props => {
  // const [todoList, setToDoList] = useState(JSON.parse(localStorage.getItem('todoList')));
  // const [doneList, setDoneList] = useState(JSON.parse(localStorage.getItem('doneList')));

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const todoList = useSelector(state => state.TodoReducer.todoList);
  const doneList = useSelector(state => state.TodoReducer.doneList);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem('doneList', JSON.stringify(doneList));
  }, [doneList]);

  function add () {

    if(title === '') return;
    else {
      const testTask = {
        title: title,
        description: description
      };

      dispatch(addTodo(testTask));

      // setToDoList(_todoList);

      setTitle('');
      setDescription('');
    }
  }

  function remove(todo) {
    const _doneList = {
      title: todo.title,
      description: todo.description
    };

    
    dispatch(removeTodo(_doneList));

    // setToDoList(todoList.filter(data => data !== todo))
    // setDoneList(_doneList);
  }

  return (
    <div className="App">
        <div className="add-form">
          <div>
            <input
              id="title"
              placeholder="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <input
              id="description"
              placeholder="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
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
