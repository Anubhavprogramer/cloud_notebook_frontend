import { React, useContext } from "react";
import noteContext from "../context/Notes/NoteContext";

export const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote  } = props;
  return (
    <>
      <div className="col-md-3">
        <div className="card my-3">
          <div className="card-body container">
            <div className="d-flex align-items-center">
              <h2 className="card-title">{note.title}</h2>
            </div>
            <h5 className="card-title">{note.tag}</h5>
            <p className="card-text">{note.description}</p>
            <i
              className="fa-solid fa-trash mx-2"
              onClick={() => {
                deleteNote(note._id)
                props.showAlert("Deleted successfully","danger")
              }}
            ></i>
            <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
          </div>
        </div>
      </div>
    </>
  );
};
