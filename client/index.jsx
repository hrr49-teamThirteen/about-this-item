import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AnswersList from './components/AnswersList.jsx';
import ShippingAndReturns from './components/ShippingAndReturns.jsx';
import 'babel-polyfill';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.handleShowToggle = this.handleShowToggle.bind(this);
    // this.getProductDetails = this.getProductDetails.bind(this);

    this.state = {
      selected: 'details',
      showToggle: false,
      highlights: [],
      description: '',
      specifications: {},
      product: 1
    };



    // INITIAL API CALLS FOR DATA
  }
  componentDidMount() {
    this.getProductDetails();
  }

  // API CALLS
  getProductDetails() {
    axios({
      method: 'GET',
      url: `api/products/${this.state.product}/details`
    })
      .then(result => {
        // console.log(result.data);
        this.setState({
          description: result.data.description,
          highlights: result.data.highlights,
          specifications: result.data.specifications
        });
      }, (err) => {
        console.error(err);
      });
  }

  // HANDLERS
  handleClick(e) {
    document.getElementById(this.state.selected).classList.remove('selected');
    document.getElementById('shipping-returns').classList.add('display-none');

    this.setState({
      selected: e.target.id
    }, ()=> {
      document.getElementById(this.state.selected).classList.add('selected');
      if (this.state.selected === 'shipping') {
        document.getElementById('shipping-returns').classList.remove('display-none');
      }
    });
  }

  handleShowToggle() {
    var button = document.querySelector('.btn.expand');

    if (!this.state.showToggle) {
      return this.setState({
        showToggle: !this.state.showToggle
      }, () => {
        button.innerHTML = 'Show less';
      });
    }
    this.setState({
      showToggle: false
    }, () => {
      button.innerHTML = 'Show more';
    });
  }

  render() {
    return (
      <div id="main-container">
        <h2 id="module-title">About this item</h2>
        <div id="tab-heading">
          <div className="margin-left">
            <ul id="tab-list">
              <li id="details" className="tab details selected" onClick={this.handleClick.bind(this)}>Details</li>
              <li id="shipping" className="tab shipping" onClick={this.handleClick.bind(this)}>Shipping & Returns</li>
              <li id="q-and-a" className="tab q-and-a" onClick={this.handleClick.bind(this)}>Q&A (number of questions)</li>
            </ul>
          </div>
        </div>
        <ShippingAndReturns specs={this.state.specifications}/>
        <AnswersList/>
        <button type="button" className="btn expand" onClick={this.handleShowToggle.bind(this)}>Show more</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));