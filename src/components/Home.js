import React from "react";
import { Notes } from "./Notes";


export const Home = (props) => {
  const {showAlert}= props;
  const {mode}= props;
  return (
    <>
      <Notes mode={mode} showAlert={showAlert} />
    </>
  );
};
