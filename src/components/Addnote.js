import {React,useContext} from 'react';
import noteContext from "../context/Notes/NoteContext";
import { useState } from 'react';

export const Addnote = (props) => {
  const context = useContext(noteContext);
  const {addNote } = context;
  const Submitthenote = (e) =>{
    e.preventDefault();
    
    if (!note.title || !note.description || !note.tag) {
      alert('Please fill in all fields');
      return;
    }
    addNote(note.title,note.description,note.tag);
    setnote({title:"",description:"",tag:""})
    props.showAlert("Note Added successfully", "success")
  }

  const resetbutton=()=>{
    setnote({title:"",description:"",tag:""})
    props.showAlert("Deleted successfully", "danger")
  } 

  const [note, setnote] = useState({title:"",description:"",tag:""})
  const onchange = (e)=>{
    setnote({...note,[e.target.name]:e.target.value})
  }
  return (
    <div className="container ">
        <h1 className={` container text-${props.mode === "dark" ? "light" : "secondary"}`}>Add a new note</h1>
        <div className="mb-3">
          <label htmlFor="title" className={`form-label text-${
              props.mode === "dark" ? "light" : "secondary"
            }`}>
            Note Title{""}
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name='title'
            placeholder="Note Title"
            onChange={onchange}
            minLength={5}
            required 
            value={note.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className={`form-label text-${
              props.mode === "dark" ? "light" : "secondary"
            }`}>
            Note Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name='description'
            rows="3"
            onChange={onchange}
            placeholder='Note Description'
            minLength={5}
            required 
            value={note.description}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className={`form-label text-${
              props.mode === "dark" ? "light" : "secondary"
            }`}>
            tag{""}
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name='tag'
            placeholder="Note Title"
            onChange={onchange}
            minLength={5}
            required 
            value={note.tag}
          />
        </div>
          <button disabled={note.title.length<5 || note.description.length<5 || note.tag.length<3} type="button" className="btn btn-primary" onClick={Submitthenote} >ADD NOTE</button>
          <button disabled={note.title.length<5 || note.description.length<5 || note.tag.length<3} type="button" className="btn btn-danger mx-3" onClick={resetbutton} >RESET</button>
      </div>
  )
}
