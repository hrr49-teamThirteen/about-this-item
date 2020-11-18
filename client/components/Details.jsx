import React from 'react';
import HighlightsList from './HighlightsList.jsx';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {
    return (
      <div id="details-container">
        <div className="container-white">
          <div>
            <div className="margin-left">
              <h3 className="highlights">Highlights</h3>
              <HighlightsList/>
              {/* <ul className="container-highlights">
                <div className="highlight-element"><li className ="highlight-item"><span>Highlights Entries Will Go Here and here is some excessively long text for this thing and then even more to show just how ridiculous this can be if we put our minds to it</span></li></div>
                <div className="highlight-element"><li className ="highlight-item"><span>Highlights Entries Will Go Here</span></li></div>
                <div className="highlight-element"><li className ="highlight-item"><span>Highlights Entries Will Go Here</span></li></div>
                <div className="highlight-element"><li className ="highlight-item"><span>Highlights Entries Will Go Here and here is some excessively long text for this thing</span></li></div>
                <div className="highlight-element"><li className ="highlight-item"><span>Highlights Entries Will Go Here</span></li></div>
                <div className="highlight-element"><li className ="highlight-item"><span>Highlights Entries Will Go Here</span></li></div>
                <div className="highlight-element"><li className ="highlight-item"><span>Highlights Entries Will Go Here</span></li></div>
              </ul> */}
            </div>
          </div>
        </div>
        <button type="button" className="btn expand" onClick={this.props.toggle}>Show more</button>
      </div>
    );
  }
}

export default Details;