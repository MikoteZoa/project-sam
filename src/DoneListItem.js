import React from 'react';
import './DoneListItem.css';

const DoneListItem = props => {
  const {title, description} = props;

  return (
    <div className="DoneListItem" {...props}>
      <div className="DoneListItem-title">{title}</div>
      <div className="DoneListItem-description">{description}</div>
    </div>
  );
}

export default DoneListItem;
