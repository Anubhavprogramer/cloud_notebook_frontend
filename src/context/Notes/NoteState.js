import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitital = [
    {
        "_id": {
          "$oid": "65902112d560b0cb1bd41350"
        },
        "user": {
          "$oid": "658ddceb02f8ce72612f9217"
        },
        "tittle": "tittle-one",
        "description": "dummy description",
        "tag": "personal",
        "Date": "1703944466012",
        "__v": 0
      },
    {
        "_id": {
          "$oid": "65902112d560b0cb1bd41350"
        },
        "user": {
          "$oid": "658ddceb02f8ce72612f9217"
        },
        "tittle": "tittle-two",
        "description": "dummy description",
        "tag": "personal",
        "Date": "1703944466012",
        "__v": 0
      }
  ];

  const [notes,setNotes] = useState(notesInitital)

  return (
    <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
