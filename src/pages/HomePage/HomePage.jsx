import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { connect } from "react-redux";

import full_bg from "../../img/bg-full.png";
import pic1 from "../../img/about-img-1.png";
import pic2 from "../../img/about-img-2.png";
import pic3 from "../../img/about-img-3.png";
import shop_img from "../../img/shop.png";
import news_img from "../../img/news.png";
import services_img from "../../img/services.png";
import gallery_img from "../../img/gallery.png";
import contact_img from "../../img/contact.png";
import blue_paw from "../../img/paw.png";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <main>
        <img src={full_bg} alt="full-bg" className="bg" />
        <header className="header">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Pawadise</span>
              <span className="heading-primary--sub">
                is where your pets smile
              </span>
              {!isAuthenticated ? (
                <button
                  onClick={this.togglePopup}
                  className="btn btn--white btn--animated u-margin-top-small"
                >
                  Đăng nhập
                </button>
              ) : null}
              {this.state.showPopup ? (
                <LoginForm
                  closePopup={this.togglePopup}
                  loggedIn={this.loggedIn}
                />
              ) : null}
            </h1>
          </div>
        </header>

        <section className="section-about">
          <div className="u-center-text">
            <h2 className="heading-secondary u-margin-bottom-big">
              Đôi điều về chúng tôi
            </h2>
          </div>

          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Pawadise, thú cưng luôn cần
              </h3>
              <p className="section-about__para u-margin-bottom-big">
                Chuyên cung cấp thông tin các cửa hàng mua bán – cafe thú cưng -
                dịch vụ chăm sóc một cách nhanh chóng và chính xác
              </p>

              <h3 className="heading-tertiary u-margin-bottom-small">
                Pawadise có gì?
              </h3>
              <div className="section-about__para">
                <ul>
                  <li>Hơn 200 shop bán đồ tại Đà Nẵng</li>
                  <li>Hỗ trợ danh mục đa dạng</li>
                  <li>Luôn cập nhật tin tức, sự kiện hot về các nhóc yêu </li>
                  <li>
                    Nơi bạn có thể thoải mái chia sẻ kinh nghiệm nuôi thú cưng
                  </li>
                  <li>Hệ thống dịch vụ chăm sóc vật yêu gần bạn nhất</li>
                  <li>Dễ sử dụng cho tất cả mọi người </li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  src={pic1}
                  alt="Photo1"
                  className="composition__photo composition__photo--p1"
                />
                <img
                  src={pic3}
                  alt="Photo3"
                  className="composition__photo composition__photo--p2"
                />
                <img
                  src={pic2}
                  alt="Photo2"
                  className="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-features">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary u-margin-bottom-medium">
              Chúng tôi có tất cả những gì thú cưng bạn cần
            </h2>
          </div>

          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <img src={shop_img} alt="Shop" className="card__image" />
                  <h4 className="card__heading">
                    <span className="card__heading-span">Cửa hàng</span>
                  </h4>
                  <img
                    src={blue_paw}
                    alt="blue paw"
                    className="card__icon u-margin-top-big"
                  />
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <p className="card__cta--para">
                      Bạn có thể sắm những món đồ dễ thương cho thú cưng của bạn
                    </p>
                    <Link to="/shop" className="btn card__btn">
                      &gt;&gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <img src={news_img} alt="News" className="card__image" />

                  <h4 className="card__heading">
                    <span className="card__heading-span">Tin tức</span>
                  </h4>
                  <img
                    src={blue_paw}
                    alt="blue paw"
                    className="card__icon u-margin-top-big"
                  />
                </div>
                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    <p className="card__cta--para">
                      Nơi bạn có thể tha hồ trao đổi và tìm kiếm kinh nghiệm
                      nuôi thú cưng
                    </p>
                    <Link to="/news" className="btn card__btn">
                      &gt;&gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <img
                    src={services_img}
                    alt="Events"
                    className="card__image"
                  />

                  <h4 className="card__heading">
                    <span className="card__heading-span">Dịch vụ</span>
                  </h4>
                  <img
                    src={blue_paw}
                    alt="blue paw"
                    className="card__icon u-margin-top-big"
                  />
                </div>
                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    <p className="card__cta--para">
                      Bạn muốn thú cưng của mình khoẻ mạnh và năng động? Bạn tìm
                      đến đúng nơi rồi đó
                    </p>
                    <Link to="/service" className="btn card__btn">
                      &gt;&gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-1-of-2">
              <div className="card card--under card--under-1">
                <div className="card__side card__side--front">
                  <img
                    src={gallery_img}
                    alt="Events"
                    className="card__image card__image--under"
                  />

                  <h4 className="card__heading">
                    <span className="card__heading-span">Ảnh</span>
                  </h4>
                  <img
                    src={blue_paw}
                    alt="blue paw"
                    className="card__icon u-margin-top-big card__icon--under"
                  />
                </div>
                <div className="card__side card__side--back card__side--back-4">
                  <div className="card__cta">
                    <p className="card__cta--para">
                      Bạn đang buồn? Hi vọng chúng tôi có thể giúp bạn
                    </p>
                    <Link to="/gallery" className="btn card__btn">
                      &gt;&gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-2">
              <div className="card card--under card--under-2">
                <div className="card__side card__side--front">
                  <img
                    src={contact_img}
                    alt="Events"
                    className="card__image card__image--under"
                  />

                  <h4 className="card__heading">
                    <span className="card__heading-span">Liên Hệ</span>
                  </h4>
                  <img
                    src={blue_paw}
                    alt="blue paw"
                    className="card__icon u-margin-top-big card__icon--under"
                  />
                </div>
                <div className="card__side card__side--back card__side--back-5">
                  <div className="card__cta">
                    <p className="card__cta--para">
                      Nếu bạn cần sự trợ giúp, xin đừng ngần ngại liên lạc với
                      chúng tôi
                    </p>
                    <Link to="/contact" className="btn card__btn">
                      &gt;&gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(HomePage);
