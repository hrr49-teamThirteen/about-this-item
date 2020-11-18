import React from 'react';

const HighlightsListEntry = function(props) {
  return (
    <div className="highlight-element">
      <li className ="highlight-item"><span>{props.highlight}</span></li>
    </div>
  );
};

export default HighlightsListEntry;