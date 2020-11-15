import React from 'react';
import ReactDOM from 'react-dom';
import AnswersList from './components/AnswersList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div>Probably an App Here</div>
        <AnswersList/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));