import {React,useContext} from 'react';
import noteContext from "../context/Notes/NoteContext";
import { useState } from 'react';

export const Addnote = () => {
  const context = useContext(noteContext);
  const {addNote } = context;
  const Submitthenote = (e) =>{
    e.preventDefault();
    
    if (!note.title || !note.description || !note.tag) {
      alert('Please fill in all fields');
      return;
    }
    addNote(note.title,note.description,note.tag);
  }

  const [note, setnote] = useState({title:"",description:"",tag:""})
  const onchange = (e)=>{
    setnote({...note,[e.target.name]:e.target.value})
  }
  return (
    <div className="container">
        <h1>Add a new note</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Note Title{""}
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name='title'
            placeholder="Note Title"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Note Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name='description'
            rows="3"
            onChange={onchange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            tag{""}
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name='tag'
            placeholder="Note Title"
            onChange={onchange}
          />
        </div>
          <button type="button" className="btn btn-primary" onClick={Submitthenote} >Submit</button>
      </div>
  )
}
