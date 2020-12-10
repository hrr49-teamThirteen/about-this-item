import React from 'react';
import AnswersListEntry from './AnswersListEntry.jsx';
import styles from '../assets/style.css';

const AnswersList = function(props) {
  return (
    <div className={styles.containerAnswer}>
      {
        props.answers.map((item, i) => {
          // current db does not match question id from answers to id of questions
          // if (item['question_id'] === props.questionId) {
            return <AnswersListEntry
              answer={item}
              key={i}
            />;
          // }
        })
      }
    </div>
  );
};

export default AnswersList;