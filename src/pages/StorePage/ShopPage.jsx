import React, { Component } from "react";
import callApi from "../../utils/callApi";
import { Link } from "react-router-dom";

import full_bg from "../../img/bg-full.png";
import blue_paw from "../../img/paw.png";

const ListItem = ({ shop }) => {
  return (
    <div className="info--shop">
      <div className="info__image--sprout">
        <img
          src={`https://pawadise.s3.ap-east-1.amazonaws.com/${shop.avatar}`}
          alt="shopPhoto"
          className="info__image--displayed"
        />
      </div>

      <div className="info__text-container">
        <p className="info__text-container--title">{shop.name}</p>
        <p className="info__text-container--address">
          Địa chỉ:
          {shop.address.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </p>
      </div>

      <button className="btn__action">
        Chi tiết
        <img src={blue_paw} alt="paw_icon" className="btn__action--paw" />
      </button>
    </div>
  );
};
class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: []
    };
  }
  componentDidMount() {
    callApi("shop", "GET", null).then(res => {
      this.setState({
        shops: res.data
      });
    }).catch(err => {
      console.log(err);      
    });
  }
  render() {
    const { shops } = this.state;

    return (
      <main>
        <img src={full_bg} alt="full-bg" className="bg" />
        <header className="header--shop" />

        <section className="section-shopList">
          <div className="container--shop">
            <div className="box--shop">
              {shops.map(shop => (
                <Link to={`stores/${shop._id}`} key={shop._id}>
                  <ListItem shop={shop} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default ShopPage;
