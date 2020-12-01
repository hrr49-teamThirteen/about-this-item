import React from 'react';
import styles from '../assets/style.css';

export default class ModalWarning extends React.Component {
  render() {
    return (
      <div className={this.props.overlayClass}>
        <div className={this.props.modalClass}>
          <div className={styles.warningBoxHeader}>
            <div className={styles.warningIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <g fill="none" fillRule="evenodd">
                  <path fill="#E86900" d="M1 21h22L12 2z"></path>
                  <path d="M12 16a1.12 1.12 0 110 2.24A1.12 1.12 0 0112 16zm.75-7v5.75h-1.5V9h1.5z" fill="#FFF"></path>
                </g>
              </svg>
            </div>
            <h2 className={styles.warningHeaderText}>This item won't be shipped in a NearMiss box</h2>
            <div className={styles.warningClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <defs>
                  <circle cx="12" cy="12" r="11"></circle>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <mask id="nds-Icon194b" fill="#fff">
                      <circle id="nds-Icon194a" cx="12" cy="12" r="11"></circle>
                  </mask>
                  <path fill="#333" mask="url(#nds-Icon194b)" d="M0 0h24v24H0z"></path>
                  <path fill="#FFF" mask="url(#nds-Icon194b)" d="M12 10.586l4.243-4.243 1.414 1.414L13.414 12l4.243 4.243-1.414 1.414L12 13.414l-4.243 4.243-1.414-1.414L10.586 12 6.343 7.757l1.414-1.414z"></path>
                </g>
              </svg>
            </div>
          </div>
          <div className={styles.warningMessage}>
            <p>Because this item ships in its original packaging, there's no way to hide what it is. If you're giving it as a gift and don't want to spoil the surprise, here are a couple options:</p>
            <ul className={styles.warningList}>
              <li className={styles.warningListItem}>Have the item sent to a trusted friend or relative's home.</li>
              <li className={styles.warningListItem}>Choose Order Pickup</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
}
