import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import DoneListItem from './DoneListItem';
import {clear} from './store/modules/TodoReducer';

const DoneList = props => {
  // const [doneList] = useState(JSON.parse(localStorage.getItem('doneList')));
  const dispatch = useDispatch();
  const doneList = useSelector(state => state.TodoReducer.doneList);

  useEffect(() => {
    localStorage.setItem('doneList', JSON.stringify(doneList));
  }, [doneList]);

  function clearDone() {
    dispatch(clear());
  }

  return (
    <div className="App">
      <div>
        Done List
      </div>
      <div className="add-form">
        <div>
          <button
            type="button"
            onClick={() => props.history.push('/')}
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => clearDone()}
          >
            Clear
          </button>
        </div>
      </div>
      <div>
        {doneList.map(todo => (
          <DoneListItem
            key={todo.title} //인덱스 역할(자기 넘버?)
            title={todo.title}
            description={todo.description}
          />
        ))}
      </div>
    </div>
  )
}

export default DoneList;
