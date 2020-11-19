import React from 'react';
import QuestionList from './QuestionList.jsx';

class QAndA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleQuestions: 2
    };
  }
  render() {
    return (
      <div id="q-and-a-container" className="display-none">
        <div className="margin-left">
          <div className="container-questions">
            <QuestionList questions={this.props.questions} answers={this.props.answers}/>
          </div>
        </div>
      </div>
    );
  }
}

export default QAndA;