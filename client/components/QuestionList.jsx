import React from 'react';

const QuestionList = function(props) {
  return (
    <div>
      <div><h3 className="question-row"><span>Q: </span><span className="question-text">Question goes here?</span></h3></div>
      <div className="question-row-name"><span>Name</span> — Post Date Goes Here</div>
      <div className="container-answer">
        <div className="answer-row"><span className="answer-bold">A: </span><span>The point that pierces the pod is most likely clogged. There’s a tiny opening which needs to be cleared. I clean mine monthly by using a straightened paper clip. You can google how to clean your machine. Be sure to unplug your Keurig machine first.</span></div>
        <div className="answer-row-name"><span>Name</span> — Post Date Goes Here <span className="helpful answer-click"> Helpful(number) </span><span className="not-helpful answer-click"> Not helpful(number) </span><span className="report-answer answer-click"> Report </span></div>
        <div className="answer-row"><span className="answer-bold">A: </span><span>The point that pierces the pod is most likely clogged. There’s a tiny opening which needs to be cleared. I clean mine monthly by using a straightened paper clip. You can google how to clean your machine. Be sure to unplug your Keurig machine first.</span></div>
        <div className="answer-row-name"><span>Name</span> — Post Date Goes Here <span className="helpful answer-click"> Helpful(number) </span><span className="not-helpful answer-click"> Not helpful(number) </span><span className="report-answer answer-click"> Report </span></div>
      </div>
      <button type="button" className="btn">Answer it</button>
      <hr></hr>
    </div>
  );
};

export default QuestionList;