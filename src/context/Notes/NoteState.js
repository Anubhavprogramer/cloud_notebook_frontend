import React from "react";
import noteContext from "./NoteContext";

 const NoteState = () =>{
    
    return(
        <noteContext.Provider>
            {/* {props.children} */}
        </noteContext.Provider>
    )
 }

 export default NoteState;