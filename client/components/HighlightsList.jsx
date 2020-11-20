import React from 'react';
import HighlightsListEntry from './HighlightsListEntry.jsx';
import styles from './assets/style.css';

const HighlightsList = function(props) {
  return (
    <ul className="container-highlights">
      {
        props.highlights.map((item, index) =>
          <HighlightsListEntry highlight={item} key={index}/>
        )}
    </ul>
  );
};

export default HighlightsList;