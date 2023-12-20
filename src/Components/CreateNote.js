import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import './CreateNote.css';
const CreateNote = (props) => {


    const [note, setNote] = useState({
        title:'',
        content:''
    });
 const notestore=localStorage.setItem(note.title,note.content);
  const InputEvent=(e)=>{
   
      const value=e.target.value;
      const name=e.target.name;
    setNote((prevdata)=>{
        return {
            ...prevdata,
            [name]:value,

        }
    })
  }

  const addEvent=()=>{
props.passNote(note);
setNote({
    title:'',
    content:''
})
  }

  return (
    <>
    <div className='main_note'>
        <form id='form' name='form'>
            <input type='text' name='title' value={note.title} onChange={InputEvent} placeholder='Title' autoComplete='off'/>

            <textarea value={note.content} name='content' onChange={InputEvent} placeholder='Take a note...'></textarea>
            
            <IoMdAdd onClick={addEvent}  className='plus_sign'/>

            
        </form>
    </div>
    
    
    </>
  )
}

export default CreateNote