import React from 'react';
import Moment from 'react-moment';
import AnswersList from './AnswersList.jsx';
import styles from '../assets/style.css';

class QuestionListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answerButtonToggle: false
    };
  }
  render() {
    return (
      <div>
        <div><h3 className={styles.questionRow}><span>Q: </span><span className={styles.questionText}>{this.props.question['question']}</span></h3></div>
        <div className={styles.questionRowName}><span>{this.props.question['user_name']}</span> — <Moment fromNow>{this.props.question['created_at']}</Moment></div>
        <AnswersList questionId={this.props.question['question_id']} answers={this.props.answers}/>
        <button type="button" className={styles.btn}>Answer it</button>
        <hr></hr>
      </div>
    );
  }
}

export default QuestionListEntry;