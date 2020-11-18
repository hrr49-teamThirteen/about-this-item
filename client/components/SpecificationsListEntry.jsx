import React from 'react';

const SpecificationsListEntry = function(props) {
  return (
    <div className="spec-container">
      <b>{props.spec}:</b> {props.value}
      <hr></hr>
    </div>
  );
};

export default SpecificationsListEntry;