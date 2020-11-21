import React from 'react';
import styles from '../assets/style.css';

const SpecificationsListEntry = function(props) {
  return (
    <div className={styles.specContainer}>
      <b>{props.spec}:</b> {props.value}
      <hr></hr>
    </div>
  );
};

export default SpecificationsListEntry;