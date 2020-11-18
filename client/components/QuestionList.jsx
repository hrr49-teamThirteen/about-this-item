import React from 'react';
import QuestionListEntry from './QuestionListEntry.jsx';

const QuestionList = function(props) {
  return (
    <div>{
      props.questions.map((item, i) =>
        <QuestionListEntry question={item} key={i} answers={props.answers}/>
      )}
    </div>
  );
};

export default QuestionList;