import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actLogoutUser } from "../../actions/index";
import React, { Component } from "react";
import { stack as Menu } from "react-burger-menu";
import nav_img from "../../img/nav-img-small.png";

const navImgStyle = {
  position: "fixed",
  bottom: "0rem",
  right: "4.5rem"
};

const Welcome = ({ user, onLogout }) => {
  return (
    <li style={{ listStyleType: "none" }} className="navigation__welcome">
      <a
        href="#"
        style={{ textDecoration: "none" }}
        className="dropdown-toggle menu-item navigation__user"
        data-toggle="dropdown"
      >
        {user.name}
      </a>
      <ul className="dropdown-menu">
        <li style={{ listStyleType: "none" }}>
          <Link
            style={{ textDecoration: "none" }}
            className="navigation__user--attribute"
            to={`/profile/${user.username}`}
          >
            &bull; Trang cá nhân
          </Link>
        </li>

        <li style={{ listStyleType: "none" }}>
          <Link
            style={{ textDecoration: "none" }}
            className="navigation__user--attribute"
            to="/"
            onClick={onLogout}
          >
            &bull; Đăng xuất
          </Link>
        </li>
      </ul>
    </li>
  );
};
class Nav extends Component {
  onLogout = e => {
    e.preventDefault();
    if (this.props.history) {
      this.props.actLogoutUser(this.props.history);
    }
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <Menu right>
        {isAuthenticated ? (
          <Welcome user={user} onLogout={this.onLogout} />
        ) : null}
        <Link
          to="/"
          style={{ textDecoration: "none", color: "#fff" }}
          className="menu-item navigation__link"
        >
          &diams; Trang chủ
        </Link>
        <Link
          to="/news"
          style={{ textDecoration: "none", color: "#fff" }}
          className="menu-item navigation__link"
        >
          &diams; Tin tức
        </Link>
        <Link
          to="/shop"
          style={{ textDecoration: "none", color: "#fff" }}
          className="menu-item navigation__link"
        >
          &diams; Cửa hàng
        </Link>
        <Link
          to="/service"
          style={{ textDecoration: "none", color: "#fff" }}
          className="menu-item navigation__link"
        >
          &diams; Dịch vụ
        </Link>
        <Link
          to="/gallery"
          style={{ textDecoration: "none", color: "#fff" }}
          className="menu-item navigation__link"
        >
          &diams; Kho ảnh
        </Link>
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "#fff" }}
          className="menu-item navigation__link"
        >
          &diams; Liên hệ
        </Link>

        <img
          src={nav_img}
          alt="nav-img"
          className="bm-img"
          style={navImgStyle}
        />
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { actLogoutUser }
)(withRouter(Nav));
