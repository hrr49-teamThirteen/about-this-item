import React from 'react';
import QuestionList from './QuestionList.jsx';
import styles from '../assets/style.css';

class QAndA extends React.Component {
  constructor(props) {
    super(props);
    this.handleMoreClick = this.handleMoreClick.bind(this);

    this.moreQuestions = React.createRef();

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
        this.moreQuestions.current.classList.add(`${styles.displayNone}`);
      }
    });
  }
  render() {
    return (
      <div id="q-and-a-container" className={this.props.visible}>
        <div className={styles.marginLeft}>
          <div className={styles.containerQuestions}>
            <QuestionList questions={this.props.questions} answers={this.props.answers} visibleQuestions={this.state.visibleQuestions}/>
          </div>
        </div>
        <div className={styles.questionButtonRow}>
          <div id="more-questions" ref={this.moreQuestions}className={styles.questionButtonColumn}>
            <button type="button" className={`${styles.btn} ${styles.question} more`} onClick={this.handleMoreClick}>See more questions ({this.props.questionCount})</button>
          </div>
          <div className={styles.questionButtonColumn}>
            <button type="button" className={`${styles.btn} ${styles.question} ${styles.ask}`}>Ask a question</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QAndA;