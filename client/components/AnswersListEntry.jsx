import React, { lazy } from 'react';
const Moment = lazy(() => import('react-moment'));
import styles from '../assets/style.css';

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
        <div className={styles.answerRow}><span className={styles.answerBold}>A: </span><span>{this.props.answer['answer']}</span></div>
        <div className={styles.answerRowName}><span>{this.props.answer['user_name']}</span> — <Moment fromNow>{this.props.answer['created_at']}</Moment> <span className={`helpful ${styles.answerClick}`}> Helpful({this.props.answer['helpful']}) </span><span className={`not-helpful ${styles.answerClick}`}> Not helpful({this.props.answer['not_helpful']}) </span><span className={`report-answer ${styles.answerClick}`}> Report </span></div>
      </div>
    );
  }
}

export default AnswersListEntry;