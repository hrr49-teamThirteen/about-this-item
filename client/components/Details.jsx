import React from 'react';
import HighlightsList from './HighlightsList.jsx';

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
        <div className="container-white">
          <div>
            <div className="margin-left">
              <div className="container-spec-desc">
                <div className="column">
                  <h3 className="Specifications">Specifications</h3>
                </div>
                <div className="column">
                  <h3 className="Description">Description</h3>
                  <div>{this.props.description}</div>
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