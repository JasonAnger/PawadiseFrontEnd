import React, { Component } from "react";
import SeparationLine from "../../components/SeparationLine";

class StoreDetailDescription extends Component {
  render() {
    const { info, description } = this.props;

    return (
      <div className="store__description">
        <div className="store__description--general">
          <div className="store__description--general--left">
            <p className="store__description--attribute store__description--attribute-1">
              SĐT
            </p>

            <p className="store__description--attribute store__description--attribute-2">
              Giờ mở cửa
            </p>

            <p className="store__description--attribute store__description--attribute-3">
              Đánh giá
            </p>
          </div>

          <div className="store__description--general--right">
            <p className="store__description--value store__description--value-1">
              {info.phoneNumber}
            </p>

            <p className="store__description--value store__description--value-2">
              {info.openTime}
            </p>

            <p className="store__description--value store__description--value-3">
              5/5
            </p>
          </div>
        </div>

        <div className="store__description--paragraph">
          <p className="store__description--intro">Giới thiệu</p>

          <SeparationLine
            position="absolute"
            bottom="80%"
            opacity=".2"
            margin="0 0"
            width="100%"
          />

          <div className="store__description--list">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default StoreDetailDescription;
