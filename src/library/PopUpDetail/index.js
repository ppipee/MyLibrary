import React, { Component } from "react";
import "./popup.scss";
class PopUp extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      detail: ""
    };
  }

  createPopUp = () => {
    let show = this.state.show;
    console.log(show);
    let active = show ? " active" : "";
    let detail = show ? this.props.data.detail : "";
    return (
      <div className="modal" onClick={this.toggle.bind()}>
        <div className={`item-popup${active}`}>{detail}</div>
        <div className={`overlay${active}`} />
      </div>
    );
  };

  toggle = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div
        className="item"
        id={this.props.data.id}
        onClick={this.toggle.bind()}
      >
        {this.createPopUp()}
      </div>
    );
  }
}
export default PopUp;
