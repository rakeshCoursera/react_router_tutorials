import React from 'react';

class ContactUser extends React.Component {
  render() {
    return (
      <div><h1 className="text-center">{`Namaste, ${this.props.match.params.username} ${this.props.surname}`} </h1></div>
    );
  }
}

module.exports = ContactUser;
