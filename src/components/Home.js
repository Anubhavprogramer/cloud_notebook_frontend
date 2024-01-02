import React from "react";
import { Notes } from "./Notes";


export const Home = () => {
  
  return (
    <>
      <div className="container">
        <h1>Add a new note</h1>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Note Title{""}
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Note Title"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Note Description
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
          <button type="button" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-danger mx-3">Reset</button>
      </div>


      <Notes/>
    </>
  );
};
