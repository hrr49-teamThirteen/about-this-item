import React from 'react';
import QuestionList from './QuestionList.jsx';

class QAndA extends React.Component {
  constructor(props) {
    super(props);
    this.handleMoreClick = this.handleMoreClick.bind(this);

    this.state = {
      visibleQuestions: 2
    };
  }

  handleMoreClick() {
    var moreQuestions = this.state.visibleQuestions + 3;
    this.setState({
      visibleQuestions: moreQuestions
    }, () => {
      if (this.state.visibleQuestions >= this.props.questionCount) {
        document.getElementById('more-questions').classList.add('display-none');
      }
    });
  }
  render() {
    return (
      <div id="q-and-a-container" className="display-none">
        <div className="margin-left">
          <div className="container-questions">
            <QuestionList questions={this.props.questions} answers={this.props.answers} visibleQuestions={this.state.visibleQuestions}/>
          </div>
        </div>
        <div className="question-button-row">
          <div id="more-questions" className="question-button-column">
            <button type="button" className="btn question more" onClick={this.handleMoreClick}>See more questions ({this.props.questionCount})</button>
          </div>
          <div className="question-button-column">
            <button type="button" className="btn question ask">Ask a question</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QAndA;