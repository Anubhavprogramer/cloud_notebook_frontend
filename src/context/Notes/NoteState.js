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
        "tittle": "Title for the Note",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum sed sint velit. Explicabo dolores veniam odio dolorum ex veritatis, inventore sed neque rerum optio reprehenderit consequuntur laborum unde. Quibusdam.",
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
        "tittle": "Title for the Note",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum sed sint velit. Explicabo dolores veniam odio dolorum ex veritatis, inventore sed neque rerum optio reprehenderit consequuntur laborum unde. Quibusdam.",
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
        "tittle": "Title for the Note",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum sed sint velit. Explicabo dolores veniam odio dolorum ex veritatis, inventore sed neque rerum optio reprehenderit consequuntur laborum unde. Quibusdam.",
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
        "tittle": "Title for the Note",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum sed sint velit. Explicabo dolores veniam odio dolorum ex veritatis, inventore sed neque rerum optio reprehenderit consequuntur laborum unde. Quibusdam.",
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
        "tittle": "Title for the Note",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum sed sint velit. Explicabo dolores veniam odio dolorum ex veritatis, inventore sed neque rerum optio reprehenderit consequuntur laborum unde. Quibusdam.",
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
        "tittle": "Title for the Note",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum sed sint velit. Explicabo dolores veniam odio dolorum ex veritatis, inventore sed neque rerum optio reprehenderit consequuntur laborum unde. Quibusdam.",
        "tag": "personal",
        "Date": "1703944466012",
        "__v": 0
      },
    
  ];

  const [notes,setNotes] = useState(notesInitital)

  return (
    <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
