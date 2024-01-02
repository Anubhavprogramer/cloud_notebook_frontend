import React from 'react'

export const Noteitem = (props) => {
    const {note} =props;
  return (
  <>
  <div className="col-md-3">
    <div className="card my-3">
    <div className="card-body container">
        <div className="d-flex align-items-center">
            <h2 className="card-title">{note.tittle}</h2>
            <i class="fa-solid fa-trash mx-2"></i>
            <i class="fa-solid fa-pen-to-square mx-2"></i>
        </div>
        <h5 className="card-title">{note.tag}</h5>
        <p className="card-text">{note.description}</p>
    </div>
    </div>
  </div>
  </>
  )
}



