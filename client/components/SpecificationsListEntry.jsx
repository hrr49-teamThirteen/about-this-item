import React from 'react';
import styles from './assets/style.css';

const SpecificationsListEntry = function(props) {
  return (
    <div className="spec-container">
      <b>{props.spec}:</b> {props.value}
      <hr></hr>
    </div>
  );
};

export default SpecificationsListEntry;