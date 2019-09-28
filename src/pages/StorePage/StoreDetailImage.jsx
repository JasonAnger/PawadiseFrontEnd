import React, { Component } from "react";

class StoreDetailImage extends Component {
  render() {
    return (
      <div className="store__serviceImage--sprout">
        <img
          src={this.props.img}
          alt="service-detail"
          className="store__serviceImage--image"
        />
      </div>
    );
  }
}

export default StoreDetailImage;
