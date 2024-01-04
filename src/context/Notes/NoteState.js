import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitital = [];

  let [notes,setNotes] = useState(notesInitital)

  // get NOTE
  const getallNote =async()=>{
    //api calls 
    
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ZGRjZWIwMmY4Y2U3MjYxMmY5MjE3In0sImlhdCI6MTcwMzg1NjAzMn0.9xFYfowIyOVRtXKHZieHtplaL8nboIs-pwQ6d96y-0E"
      }
    });
    const json = await response.json()
    setNotes(json)
  }


  // ADD NOTE
  const addNote =async(title,description,tag)=>{
    //api calls 
    
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ZGRjZWIwMmY4Y2U3MjYxMmY5MjE3In0sImlhdCI6MTcwMzg1NjAzMn0.9xFYfowIyOVRtXKHZieHtplaL8nboIs-pwQ6d96y-0E"
      }, body: JSON.stringify({title,description,tag})
    });
    const json = await response.json();
    setNotes(notes.concat(json))
    // console.log(json)
    //logic
    // const note =json;
      
    console.log("added a note")
  }
  //DELETE NOTE
  const deleteNote = async(id)=>{

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ZGRjZWIwMmY4Y2U3MjYxMmY5MjE3In0sImlhdCI6MTcwMzg1NjAzMn0.9xFYfowIyOVRtXKHZieHtplaL8nboIs-pwQ6d96y-0E"
      }, body: JSON.stringify()
    });
    const json = response.json(); 
    console.log(json)
    console.log("deleteing the note by the id "+id)
    const newNotes = notes.filter((note)=>{
      return note._id!==id
    })

    setNotes(newNotes)
  }
  // EDIT NOTE
  const editnote = async(id,title,description,tag)=>{
    //api calls here

    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ZGRjZWIwMmY4Y2U3MjYxMmY5MjE3In0sImlhdCI6MTcwMzg1NjAzMn0.9xFYfowIyOVRtXKHZieHtplaL8nboIs-pwQ6d96y-0E"
      }, body: JSON.stringify({title,description,tag})
    });
    const json = response.json(); 
    console.log(json)

    let newNotes2 = await JSON.parse(JSON.stringify(notes))
    //logic to call edit in client side
    for(let index=0;index<notes.length;index++)
    {
        const element = notes[index]
        if(element._id===id)
        {
          newNotes2[index].title =title;
          newNotes2[index].description =description;
          newNotes2[index].tag =tag;
          break;
        }
    }
    setNotes(newNotes2)
  }

  return (
    <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editnote,getallNote}}>
        {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
