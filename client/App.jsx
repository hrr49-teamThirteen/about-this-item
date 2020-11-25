import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import QAndA from './components/QAndA.jsx';
import ShippingAndReturns from './components/ShippingAndReturns.jsx';
import Details from './components/Details.jsx';
import styles from './assets/style.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      selected: 'details',
      showToggle: false,
      highlights: [],
      description: '',
      specifications: {},
      questions: [],
      questionCount: 0,
      answers: [],
      product: 1,
      detailsTab: '',
      shippingTab: `${styles.displayNone}`,
      qAndATab: `${styles.displayNone}`,
      detailsSelect: `${styles.selected}`,
      shippingSelect: '',
      qAndASelect: ''
    };

    // INITIAL API CALLS FOR DATA
  }
  componentDidMount() {
    this.getProductDetails();
    this.getQuestions();
  }

  // API CALLS
  getProductDetails() {
    axios({
      method: 'GET',
      url: `/api/products/${this.state.product}/details`
    })
      .then(result => {
        this.setState({
          description: result.data.description,
          highlights: result.data.highlights,
          specifications: result.data.specifications
        });
      }, (err) => {
        console.error(err);
      });
  }

  getQuestions() {
    axios({
      method: 'GET',
      url: `/api/products/${this.state.product}/questions`,
    })
      .then(results => {
        this.setState({
          questionCount: results.data.length,
          questions: results.data
        });
      }, (err) => {
        console.error(err);
      });
  }

  getAnswers() {
    axios({
      method: 'GET',
      url: `/api/products/${this.state.product}/answers`
    })
      .then(results => {
        this.setState({
          answers: results.data
        });
      }, (err) => {
        console.error(err);
      });
  }

  // HANDLERS
  handleClick(e) {
    var target = e.target.id;

    this.setState({
      detailsTab: `${styles.displayNone}`,
      shippingTab: `${styles.displayNone}`,
      qAndATab: `${styles.displayNone}`,
      detailsSelect: '',
      shippingSelect: '',
      qAndASelect: ''
    }, () => {
      this.setState({
        selected: target,
        [target + 'Tab']: '',
        [target + 'Select']: `${styles.selected}`
      }, () => {
        if (this.state.selected === 'qAndA') {
          this.getAnswers();
        }
      });
    });
  }

  handleShowToggle(target) {
    var button = target;

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
      <div id={styles.mainContainer}>
        <h2 id={styles.moduleTitle}>About this item</h2>
        <div id={styles.tabHeading}>
          <div className={styles.marginLeft}>
            <ul id={styles.tabList}>
              <li id="details" className={`${styles.tab} ${this.state.detailsSelect}`} onClick={this.handleClick}>Details</li>
              <li id="shipping" className={`${styles.tab} ${this.state.shippingSelect} shipping`} onClick={this.handleClick}>Shipping & Returns</li>
              <li id="qAndA" className={`${styles.tab} ${this.state.qAndASelect} q-and-a`} onClick={this.handleClick}>Q&A ({this.state.questionCount})</li>
            </ul>
          </div>
        </div>
        <Details
          toggle={this.handleShowToggle.bind(this)}
          highlights={this.state.highlights}
          toggleStatus={this.state.showToggle}
          description={this.state.description}
          specifications={this.state.specifications}
          visible={this.state.detailsTab}
        />
        <ShippingAndReturns
        specs={this.state.specifications}
        visible={this.state.shippingTab}
        />
        <QAndA
          questions={this.state.questions}
          answers={this.state.answers}
          questionCount={this.state.questionCount}
          visible={this.state.qAndATab}
        />

      </div>
    );
  }
}

export default App;