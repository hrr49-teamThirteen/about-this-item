import React from 'react';
import HighlightsListEntry from './HighlightsListEntry.jsx';

const HighlightsList = function(props) {
  return (
    <ul className="container-highlights">
      <HighlightsListEntry/>
    </ul>
  );
};

export default HighlightsList;