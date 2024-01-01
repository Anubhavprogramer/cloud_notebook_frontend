import React,{useContext} from "react";
import noteContext from "../context/Notes/NoteContext";

export const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setnotes } = context;
  return (
    <div className="container mt-10">
      <h1>Your notes</h1>
      {notes.map((note) => {
        return note.tittle;
      })}
    </div>
  );
};
