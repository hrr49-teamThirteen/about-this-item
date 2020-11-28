import React, { lazy } from 'react';
const HighlightsListEntry = lazy(() => import('./HighlightsListEntry.jsx'));
import styles from '../assets/style.css';

const HighlightsList = function(props) {
  return (
    <ul className={styles.containerHighlights}>
      {
        props.highlights.map((item, index) =>
          <HighlightsListEntry highlight={item} key={index}/>
        )}
    </ul>
  );
};

export default HighlightsList;