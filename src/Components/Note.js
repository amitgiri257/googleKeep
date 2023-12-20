import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import './Note.css'
const Note = (props) => {
 const deleteNote=()=>{
    props.deleteItem(props.id);
 }


  return (
   <>
   <div className="note">
<h1> {props.title} </h1>
<br />
<p> {props.content}</p>
<button onClick={deleteNote} className='btn'>
<MdDeleteForever  className='deleteBtn'/>
</button>
   </div>

   </>
  )
}

export default Note