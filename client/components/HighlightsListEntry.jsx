import React from 'react';
import styles from '../assets/style.css';

const HighlightsListEntry = function(props) {
  return (
    <div className={styles.highlightElement}>
      <li className={styles.highlightItem}><span>{props.highlight}</span></li>
    </div>
  );
};

export default HighlightsListEntry;