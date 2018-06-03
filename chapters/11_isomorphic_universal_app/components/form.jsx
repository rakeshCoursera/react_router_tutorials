import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleClick = this.onHandleClick.bind(this);
    this.onHandleRedirectClick = this.onHandleRedirectClick.bind(this);
  }

  onHandleChange(e) {
    this.props.onHandleChangeValue(e.target.value);
  }

  onHandleClick() {
    this.props.onResetClick();
  }

  onHandleRedirectClick() {
    this.context.router.history.push('/');
  }

  render() {
    return (
      <div >
        <h4>Form type you entered: <i>{this.props.match.params.type !== undefined ? this.props.match.params.type : '\' \'' }</i></h4>
        <form>
          <div className="form-group">
            <label htmlFor="random">Type Something Here:</label>
            <input type="random"
              className="form-control"
              id="random"
              placeholder="Enter some value"
              name="random"
              value={this.props.inputValue !== null ? this.props.inputValue : ''}
              onChange = {this.onHandleChange}
            />
          </div>
          <p><b>You Typed:</b> {this.props.inputValue} </p>
          <br />
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onHandleClick}
          >Reset</button>
          <button
            type="button"
            className="btn btn-default pull-right"
            onClick={this.onHandleRedirectClick}
          >Redirect to Home</button>
        </form>
      </div>
    );
  }
}

Form.contextTypes = {
  router: PropTypes.object.isRequired,
};

module.exports = Form;
