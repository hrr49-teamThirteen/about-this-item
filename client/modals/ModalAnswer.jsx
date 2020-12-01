import React from 'react';

export default class ModalAnswer extends React.Component {
  render() {
    if (!this.props.modalAnswer) {
      return null;
    }
    return (
      <div>
        {/* The answer box! */}
      </div>
    );
  };
}