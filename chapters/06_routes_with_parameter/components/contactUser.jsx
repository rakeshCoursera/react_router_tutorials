import React from 'react';

class ContactUser extends React.Component {
  render() {
    const callString = this.props.match.params.number !== undefined ? `, Phone: ${this.props.match.params.number}` : '';
    return (
      <div><h1 className="text-center">{`Namaste, ${this.props.match.params.username} ${this.props.surname} ${callString}`} </h1></div>
    );
  }
}

module.exports = ContactUser;
