import React, { Component } from "react";

class StoreDetailProductCard extends Component {
  format_currency = price => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
  render() {
    const { img, productName, price } = this.props;
    return (
      <div className="store__product--card">
        <img src={img} alt="" className="store__product--card--img" />

        <p className="store__product--card--productName">{productName}</p>

        <p className="store__product--card--price">
          {this.format_currency(price)} VNĐ
        </p>
      </div>
    );
  }
}

export default StoreDetailProductCard;
