import { useState } from "react";
import CommentList from "./CommentList";

const CommentArea = (props) => {
  return (
    <div>
      <h2>Commenti:</h2>
      <CommentList asinBook={props.asinBook} />
    </div>
  );
};

export default CommentArea;
