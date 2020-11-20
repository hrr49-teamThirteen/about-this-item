import React from 'react';
import SpecificationsListEntry from './SpecificationsListEntry.jsx';
import styles from './assets/style.css';

const SpecificationsList = function(props) {
  return (
    <div>
      <div className="spec-container">
        <b>Dimensions (Overall): </b>
        {`${props.specifications['Height']} (H) x
        ${props.specifications['Weight']} (W) x
        ${props.specifications['Length']} (D)`}
        <hr></hr>
      </div>
      <div className="spec-container">
        <b>Weight:</b> {props.specifications['Weight']}
        <hr></hr>
      </div>{
        Object.keys(props.specifications).map((item, i) => {
          if (!['Weight', 'Height', 'Length', 'Width'].includes(item)) {
            return <SpecificationsListEntry spec={item} value={props.specifications[item]} key={i} />;
          }
        })
      }
      <div className="report-details">If the item details above aren't accurate or complete, we want to know about it. Report incorrect product info</div>
    </div>
  );
};

export default SpecificationsList;