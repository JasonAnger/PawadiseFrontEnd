import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../../img/not-found-bg.png";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="container__notfound">
        <img
          className="container__notfound-img"
          src={PageNotFound}
          alt="notfound_img"
        />
        <div className="box__not-found">
          <Link to="/" className="box__not-found-link btn btn--white">
            Trở lại trang chủ
          </Link>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
