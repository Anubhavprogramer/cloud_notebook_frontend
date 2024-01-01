import React,{useContext} from "react";
import noteContext from "../context/Notes/NoteContext";
import { Noteitem } from "./Noteitem";

export const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setnotes } = context;
  return (
    <div className="row mt-10">
      <h1>Your notes</h1>
      {notes.map((note) => {
        return <Noteitem note={note}/>
      })}
    </div>
  );
};
