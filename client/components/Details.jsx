import React from 'react';
import HighlightsList from './HighlightsList.jsx';
import SpecificationsList from './SpecificationsList.jsx';
import styles from './assets/style.css';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      toggled: false
    };
  }

  handleToggle() {
    this.setState({
      toggled: !this.state.toggled
    }, () => {
      this.props.toggle();
      if (this.state.toggled) {
        document.getElementById('specs-container').classList.remove('collapsed');
      } else {
        document.getElementById('specs-container').classList.add('collapsed');
      }
    });
  }

  render() {
    return (
      <div id="details-container">
        <div className="container-white">
          <div>
            <div className="margin-left">
              <h3 className="highlights">Highlights</h3>
              <HighlightsList highlights={this.props.highlights}/>
            </div>
          </div>
        </div>
        <div id="specs-container" className="container-white collapsed">
          <div>
            <div className="margin-left">
              <div className="container-spec-desc">
                <div className="column">
                  <h3 className="Specifications">Specifications</h3>
                  <SpecificationsList specifications={this.props.specifications}/>
                </div>
                <div className="column">
                  <h3 className="Description">Description</h3>
                  <div className="description-container">{this.props.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn expand" onClick={this.handleToggle}>Show more</button>
      </div>
    );
  }
}

export default Details;