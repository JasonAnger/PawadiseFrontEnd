import React, { Component } from "react";

class StoreDetailHeader extends Component {
  render() {
    const { info, photos } = this.props;
    return (
      <div className="store__header">
        <img
          src={`https://pawadise.s3.ap-east-1.amazonaws.com/${photos}`}
          alt="shopHeader"
          className="store__header--img"
        />

        <div className="store__header--title">
          <img
            src={`https://pawadise.s3.ap-east-1.amazonaws.com/${info.avatar}`}
            alt="store avatar"
            className="store__header--avatar"
          />

          <p className="store__header--storeName">{info.name}</p>
        </div>
      </div>
    );
  }
}

export default StoreDetailHeader;
