import React, { useContext,useEffect, useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/Notes/NoteContext";
import { Noteitem } from "./Noteitem";
import { Addnote } from "./Addnote";

export const Notes = (props) => {
  const ref = useRef(null);
  const refclose = useRef(null);
  const context = useContext(noteContext);
  const navigation = useNavigate(); 
  const { notes,getallNote,editnote } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getallNote();
      console.log("test to check")
    }
    else{      
      // console.log("test to check")
      navigation("/login")
    }
    // console.log("test to check")
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentnote) => {
    ref.current.click();
    setnote({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag})
    // props.showAlert("Note updated successfully", "success")
  };

  const Submitthenote = (e) =>{
    editnote(note.etitle,note.edescription,note.etag);
    editnote(note.id,note.etitle,note.edescription,note.etag)
    props.showAlert("updated successfully","success")
    refclose.current.click();
  }
  const [note, setnote] = useState({id:"",etitle:"",edescription:"",etag:""})

  const onchange = (e)=>{
    setnote({...note,[e.target.name]:e.target.value})
  }

  return (
    <>
      <Addnote showAlert={props.showAlert}/>
      {/* <!-- Modal --> */}
      <button ref={ref} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="d-none">
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update the Note
              </h5>
              <button
                type="button"
                className="btn-close d-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            {/* form to update the Note */}
            <div className="container">
        <div className="mb-3">
          <label htmlFor="etitle" className="form-label">
            Update the Title{""}
          </label>
          <input
            type="text"
            className="form-control"
            id="etitle"
            name='etitle'
            placeholder="Note Title"
            value={note.etitle}
            onChange={onchange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edescription" className="form-label">
            Update the Description
          </label>
          <textarea
            className="form-control"
            id="edescription"
            name='edescription'
            rows="3"
            onChange={onchange}
            value={note.edescription}
            minLength={5}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="etag" className="form-label">
            Update tag{""}
          </label>
          <input
            type="text"
            className="form-control"
            id="etag"
            name='etag'
            placeholder="Note Title"
            value={note.etag}
            onChange={onchange}
            minLength={5}
            required
          />
        </div>
      </div>

      {/* update  note here */}

            </div>
            <div className="modal-footer">
              <button
              ref={refclose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={Submitthenote } >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* modal ends  */}
      <div className="row mt-10">
        <h1>Your notes</h1>
        <div className="container">
        {notes.length===0 && 'No notes avaliable'}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>
          );
        })}
      </div>
    </>
  );
};
