import React, {useState, useEffect} from 'react';
import DoneListItem from './DoneListItem';

const DoneList = props => {
  const [doneList] = useState(JSON.parse(localStorage.getItem('doneList')));

  useEffect(() => {
    localStorage.setItem('doneList', JSON.stringify(doneList));
  }, [doneList]);

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
