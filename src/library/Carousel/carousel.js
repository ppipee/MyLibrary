import React, { Component } from "react";
import "./carousel.scss";
import prev from "./asset/prev.svg";
import next from "./asset/next.svg";
import { ceil } from "mathjs";
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNow: 1,
    };
  }

  changePage = state => {
    let {listItem, amount } = this.props;
    let page = this.state.pageNow
    page =
      page + state >= 1 && page + state <= ceil(listItem.length / amount)
        ? page + state
        : page;
    this.setState({
      pageNow: page
    });
  };

  pointing = e => {
    let goPage = e.target.getAttribute("point");
    this.setState({
      pageNow: parseInt(goPage)
    });
  };

  createItem = () => {
    let item = [];
    let {listItem, amount } = this.props;
    let pageNow = this.state.pageNow
    for (let i = (pageNow - 1) * 3; i < pageNow * amount; i++) {
      if (i < listItem.length)
        item.push(
          <div className="item" key={listItem[i]}>
            <span>{listItem[i]}</span>
          </div>
        );
    }
    return <div className="item-container">{item}</div>;
  };

  createPointer = () => {
    let total = ceil(this.props.listItem.length / this.props.amount);
    let pointer = [];
    let nowPointing = this.state.pageNow;
    for (let i = 1; i <= total; i++) {
      let name = "dot";
      if (i === nowPointing) name += " now-pointing";
      pointer.push(
        <span
          point={i}
          key={`dot${i}`}
          className={name}
          onClick={this.pointing}
        />
      );
    }
    return pointer;
  };

  createCarousel = () => {
    let item = this.createItem();
    let pointer = this.createPointer();
    return (
      <div className="container">
        <div className="box">
          <div className="prev">
            {this.state.pageNow !== 1 && (
              <img
                className="center"
                src={prev}
                alt="nav"
                onClick={this.changePage.bind(this, -1)}
              />
            )}
          </div>
          {item}
          <div className="next">
            {this.state.pageNow !==
              ceil(this.props.listItem.length / this.props.amount) && (
              <img
                className="center"
                src={next}
                alt="nav"
                onClick={this.changePage.bind(this, 1)}
              />
            )}
          </div>
        </div>
        <div className="pointer">{pointer}</div>
      </div>
    );
  };

  render() {
    return <div>{this.createCarousel()}</div>;
  }
}
export default Carousel;
