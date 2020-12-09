import React from 'react';
import SpecificationsListEntry from './SpecificationsListEntry.jsx';
import styles from '../assets/style.css';

import faker from 'faker';

const SpecificationsList = function(props) {
  return (
    <div>
      <div className={styles.specContainer}>
        <b>Dimensions (Overall): </b>
        {/* {`${props.specifications['Height']} (H) x
        ${props.specifications['Weight']} (W) x
        ${props.specifications['Length']} (D)`} */}
        {`${(Math.random() * 30).toFixed(2)} inches (H) x
        ${(Math.random() * 30).toFixed(2)} inches (W) x
        ${(Math.random() * 30).toFixed(2)} inches (D)`}
        <hr></hr>
      </div>
      <div className={styles.specContainer}>
        <b>Weight:</b> {`${(Math.random() * 20).toFixed(2)} pounds`}
        <hr></hr>
      </div>{
        Object.keys(props.specifications).map((item, i) => {
          if (!['Weight', 'Height', 'Length', 'Width'].includes(item)) {
            return <SpecificationsListEntry spec={item} value={props.specifications[item]} key={i} />;
          }
        })
      }
      <div className={styles.reportDetails}>If the item details above aren't accurate or complete, we want to know about it. Report incorrect product info</div>
    </div>
  );
};

export default SpecificationsList;