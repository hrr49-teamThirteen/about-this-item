import React from 'react';
import QuestionListEntry from './QuestionListEntry.jsx';
import styles from './assets/style.css';

const QuestionList = function(props) {
  return (
    <div>{
      props.questions.map((item, i) => {
        if (i < props.visibleQuestions) {
          return <QuestionListEntry question={item} key={i} answers={props.answers}/>;
        }
      })}
    </div>
  );
};

export default QuestionList;