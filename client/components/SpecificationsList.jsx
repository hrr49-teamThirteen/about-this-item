import React from 'react';
import SpecificationsListEntry from './SpecificationsListEntry.jsx';

const SpecificationsList = function(props) {
  return (
    <div>
      <div className="spec-container">
        <b>Dimensions (Overall):</b> Dimensions Go Here
        <hr></hr>
      </div>
      <div className="spec-container">
        <b>Weight:</b> Weight Goes Here
        <hr></hr>
      </div>
      <SpecificationsListEntry/>
    </div>
  );
};

export default SpecificationsList;