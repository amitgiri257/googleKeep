import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateNote from './Components/CreateNote';
import Note from './Components/Note';
import React, { useState } from 'react'
import './App.css';
const App = () => {
  const [addItem, setAddItem] = useState([])

  const addNote=(note)=>{
    setAddItem((prevdata)=>{
      return[...prevdata,note];
    });
    console.log(note);
 }
 const onDelete=(id)=>{
setAddItem((olddata)=>{
  olddata.filter((olddata,indx)=>{
    return indx!==id;
})
})
 }

  return (
    <>
    <Header/>
   <CreateNote
    passNote={addNote}  />
   
  {addItem.map((val,index)=>{
    return (
    <Note
    key={index}
    id={index}
    title={val.title}
    content={val.content}
    deleteItem={onDelete}
    />)
  })
}
    <Footer/>
    
    
    </>
    )
}

export default App