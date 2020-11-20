import React from 'react';
import styles from './assets/style.css';

const HighlightsListEntry = function(props) {
  return (
    <div className="highlight-element">
      <li className ="highlight-item"><span>{props.highlight}</span></li>
    </div>
  );
};

export default HighlightsListEntry;