import React from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';

class AnswersListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      helpfulSelect: false,
      notHelpfulSelect: false,
      reportSelect: false
    };
  }

  render() {
    return (
      <div>
        <div className="answer-row"><span className="answer-bold">A: </span><span>{this.props.answer['answer']}</span></div>
        <div className="answer-row-name"><span>{this.props.answer['user_name']}</span> — <Moment fromNow>{this.props.answer['created_at']}</Moment> <span className="helpful answer-click"> Helpful({this.props.answer['helpful']}) </span><span className="not-helpful answer-click"> Not helpful({this.props.answer['not_helpful']}) </span><span className="report-answer answer-click"> Report </span></div>
      </div>
    );
  }
}

export default AnswersListEntry;