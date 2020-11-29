import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import styles from '../assets/style.css';
import ModalWarning from '../modals/ModalWarning.jsx';

class ShippingAndReturns extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.shippingReturnsContainer = React.createRef();

    this.state = {
      shippingDate: '',
      showModal: false,
      modalClass: `${styles.modalWarningClose}`,
      overlayClass: `${styles.overlayHidden}`
    };

  }
  componentDidMount() {
    this.shippingDate();
  }

  shippingDate() {
    var targetDate = new Date();
    var shipDate = moment(targetDate).add(4, 'd').format('ddd, MMM DD');
    if (shipDate.includes('Sun')) {
      shipDate = moment(targetDate).add(5, 'd').format('ddd, MMM DD');
    }
    this.setState({
      shippingDate: shipDate
    });
  }

  showModal(e) {
    this.setState({
      showModal: true,
      modalClass: `${styles.modalWarningOpen}`,
      overlayClass: `${styles.overlayShow}`
    }, () => {
      // console.log(this.modalWarning.current);
      // this.modalWarning.current.classList.add(`${styles.open}`);
    });
  }

  closeModal(e) {
    // this.modalWarning.current.classList.remove(`${styles.open}`);
    this.setState({
      showModal: false,
      modalClass: `${styles.modalWarningClose}`,
      overlayClass: `${styles.overlayHidden}`
    }, () => {
      // this.modalWarning.current.classList.remove(`${styles.open}`);
    });
  }

  render() {
    return (
      <div id="shipping-returns-container" ref={this.shippingReturnsContainer} className={this.props.visible}>
      <div onClick={this.closeModal}><ModalWarning
        showModal={this.state.showModal}
        modalClass={this.state.modalClass}
        overlayClass={this.state.overlayClass}

      /></div>
        <div className={styles.containerWhite}>
          <div>
            <div className={styles.marginLeft}>
              <h3 className={styles.shippingOptions}>Shipping options</h3>
              <div><span className={styles.shippingGreen}>Get it by {this.state.shippingDate}</span>{' with free Standard Shipping'}</div>
              <h3 className={styles.shippingDetails}>Shipping details</h3>
              <div>Estimated ship dimensions: {this.props.specs['Length']} length x {this.props.specs['Width']} width x {this.props.specs['Height']} height</div>
              <div>Estimated ship weight: {this.props.specs['Weight']}</div>
              <div className={styles.shippingWarning}>
                <div className={styles.warningIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                    <g fill="none" fillRule="evenodd">
                      <path fill="#E86900" d="M1 21h22L12 2z"></path>
                      <path d="M12 16a1.12 1.12 0 110 2.24A1.12 1.12 0 0112 16zm.75-7v5.75h-1.5V9h1.5z" fill="#FFF"></path>
                    </g>
                    </svg>
                  </div>
                 <span>Because this item ships in its original packaging, there's no way to hide what it is. <a onClick={this.showModal} className={styles.underline}>Details</a></span>
                 </div>
              <h3 className={styles.returnDetails}>Return details</h3>
              <div>This item can be returned to any Target store or Target.com.</div>
              <div>This item must be returned within 90 days of the in-store purchase, ship date or online order pickup. See return policy for details.</div>
              <div>See the <a>return policy</a> for complete information.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShippingAndReturns;