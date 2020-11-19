import React from 'react';
import ReactDOM from 'react-dom';

class AnswersListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="answer-row"><span className="answer-bold">A: </span><span>The point that pierces the pod is most likely clogged. There’s a tiny opening which needs to be cleared. I clean mine monthly by using a straightened paper clip. You can google how to clean your machine. Be sure to unplug your Keurig machine first.</span></div>
        <div className="answer-row-name"><span>Name</span> — Post Date Goes Here <span className="helpful answer-click"> Helpful(number) </span><span className="not-helpful answer-click"> Not helpful(number) </span><span className="report-answer answer-click"> Report </span></div>
      </div>
    );
  }
}

export default AnswersListEntry;