import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import styles from '../assets/style.css';

class ShippingAndReturns extends React.Component {
  constructor(props) {
    super(props);

    this.shippingReturnsContainer = React.createRef();

    this.state = {
      shippingDate: ''
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
  render() {
    return (
      <div id="shipping-returns-container" ref={this.shippingReturnsContainer} className={this.props.visible}>
        <div className={styles.containerWhite}>
          <div>
            <div className={styles.marginLeft}>
              <h3 className={styles.shippingOptions}>Shipping options</h3>
              <div><span className={styles.shippingGreen}>Get it by {this.state.shippingDate}</span>{' with free Standard Shipping'}</div>
              <h3 className={styles.shippingDetails}>Shipping details</h3>
              <div>Estimated ship dimensions: {this.props.specs['Length']} length x {this.props.specs['Width']} width x {this.props.specs['Height']} height</div>
              <div>Estimated ship weight: {this.props.specs['Weight']}</div>
              <div className={styles.shippingWarning}><a>Warning Symbol</a> Because this item ships in its original packaging, there's no way to hide what it is. <a>Details</a></div>
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