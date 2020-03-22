import React from 'react';
import './TodoListItem.css';

const ToDoListItem = props => {
  const {title, description} = props;

  return (
    <div className="ToDoListItem" {...props}>
      <div className="ToDoListItem-title">{title}</div>
      <div className="ToDoListItem-description">{description}</div>
    </div>
  );
}

export default ToDoListItem;
