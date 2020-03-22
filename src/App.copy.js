import React, {Component} from 'react';
import './App.css';
import './TodoListItem.css';
import './DoneListItem.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      todoList: JSON.parse(localStorage.getItem('todoList')) || [],
      doneList: JSON.parse(localStorage.getItem('doneList')) || [],
      isShow: false,
    }

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onAdd () {
    const titleElement = document.getElementById("title");
    const descriptionElement = document.getElementById("description");

    if(titleElement.value === "") return;
    else {
      this.setState (
        {
          todoList: this.state.todoList.concat({
            title: titleElement.value,
            description: descriptionElement.value
          })
        },

        () => {
          titleElement.value = '';
          descriptionElement.value = '';
          localStorage.setItem('todoList', JSON.stringify(this.state.todoList))
        }
      )
    }
  }

  onDelete (todo) {
    console.log(todo);

    this.setState({
      todoList: this.state.todoList.filter(data => data !== todo),
      doneList: this.state.doneList.concat({
        title: todo.title,
        description: todo.description
      })
    },

    () => {
      localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
      localStorage.setItem('doneList', JSON.stringify(this.state.doneList));
    }
    )
  }

  render () {
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
              onClick={() => this.onAdd()}
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => this.setState({isShow: !this.state.isShow})}
            >
              Show List
            </button>
          </div>
        </div>
        <div>
          {
            this.state.todoList.map(todo => (
              <ToDoListItem
                key={todo.title} //인덱스 역할(자기 넘버?)
                title={todo.title}
                description={todo.description}
                onClick={() => this.onDelete(todo)}
              />
            ))
          }
        </div>
        <div>
          {
            this.state.isShow ?
            this.state.doneList.map(todo => (
              <DoneListItem
                key={todo.title} //인덱스 역할(자기 넘버?)
                title={todo.title}
                description={todo.description}
              />
            ))
            : null
          }
        </div>
      </div>
    );
  }
}

const ToDoListItem = props => {
  const {title, description} = props;

  return (
    <div className="ToDoListItem" {...props}>
      <div className="ToDoListItem-title">{title}</div>
      <div className="ToDoListItem-description">{description}</div>
    </div>
  );
}

const DoneListItem = props => {
  const {title, description} = props;

  return (
    <div className="DoneListItem" {...props}>
      <div className="DoneListItem-title">{title}</div>
      <div className="DoneListItem-description">{description}</div>
    </div>
  );
}

export default App;
