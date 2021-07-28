import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, deleteQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => {
          return (
            <QuestionItem question={question} key={question.id} deleteQuestion={deleteQuestion}/>
          )
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
