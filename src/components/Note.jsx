import React from 'react'
import {AiFillDelete} from 'react-icons/ai'


const Note = (props) => {

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><AiFillDelete className='icon'/></button>
    </div>
  )
}

export default Note
