import React, { Component } from "react";
import callApi from "../../utils/callApi";
import { connect } from "react-redux";
import { actLoginUser } from "../../actions/index";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAccount: true,
      username: "",
      email: "",
      password: "",
      name: ""
    };
  }

  onChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  };

  onLogin = () => {
    const { username, password } = this.state;
    const { closePopup } = this.props;
    const user = { username: username, password: password };
    this.props.actLoginUser(user);
    closePopup();
  };

  onHandleLogin = e => {
    e.preventDefault();
    this.onLogin();
  };

  keyPressed = e => {
    if (e.keyCode === 13) {
      this.onLogin();
    }
  };

  onHandleRegister = e => {
    e.preventDefault();
    const { username, email, password, name } = this.state;
    callApi("register", "POST", {
      name: name,
      username: username,
      email: email,
      password: password
    })
      .then(res => {
        if (res.status === 201) {
          this.setState({
            isAccount: true
          });
        }
      })
      .catch(function(err) {
        alert("Tài khoản này đã tồn tại. Vui lòng nhập lại thông tin");
      });
  };

  onReset = e => {
    e.preventDefault();
  };

  render() {
    const { isAccount } = this.state;
    const title = isAccount ? "Đăng nhập" : "Đăng ký";
    return (
      <div className="login">
        <div className="login__title">{title}</div>
        <div className="login__text-container">
          <div className="login__attribute">Tên đăng nhập</div>
          <div className="login__text-field">
            <input
              className="login__input"
              type="text"
              placeholder="Tên đăng nhập"
              onChange={this.onChange}
              onKeyDown={this.keyPressed}
              name="username"
              required
            />
          </div>
        </div>

        <div className="login__text-container">
          <div className="login__attribute">Mật khẩu</div>
          <div className="login__text-field">
            <input
              className="login__input"
              type="password"
              placeholder="Mật khẩu (ít nhất 8 ký tự)"
              onChange={this.onChange}
              onKeyDown={this.keyPressed}
              name="password"
              minLength="8"
              required
            />
          </div>
        </div>

        {!isAccount ? (
          <div className="login__text-container">
            <div className="login__attribute">Email</div>
            <div className="login__text-field">
              <input
                className="login__input"
                type="email"
                placeholder="Email"
                onChange={this.onChange}
                name="email"
                required
              />
            </div>
          </div>
        ) : null}

        {!isAccount ? (
          <div className="login__text-container">
            <div className="login__attribute">Họ và tên</div>
            <div className="login__text-field">
              <input
                className="login__input"
                type="text"
                placeholder="Họ tên"
                onChange={this.onChange}
                name="name"
                required
              />
            </div>
          </div>
        ) : null}

        {isAccount ? (
          <button
            type="submit"
            className="login__btn"
            onClick={this.onHandleLogin}
          >
            Đăng nhập
          </button>
        ) : (
          <button
            type="submit"
            className="login__btn"
            onClick={this.onHandleRegister}
          >
            Đăng ký
          </button>
        )}
        <label className="login__remember">
          <input type="checkbox" name="remember" /> Nhớ tài khoản
        </label>
        {isAccount ? (
          <p className="login__suggestion">
            Bạn chưa có tài khoản? &nbsp;
            <a
              href="#"
              onClick={() => {
                this.setState({ isAccount: false });
              }}
            >
              Đăng ký ngay.
            </a>
          </p>
        ) : (
          <p className="login__suggestion">
            Bạn đã có tài khoản? &nbsp;
            <a
              href="#"
              onClick={() => {
                this.setState({ isAccount: true });
              }}
            >
              Đăng nhập.
            </a>
          </p>
        )}
        <a href="#" onClick={this.onReset} className="login__forget-password">
          Quên mật khẩu?
        </a>
        <button className="login__close" onClick={this.props.closePopup}>
          &times;
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { actLoginUser }
)(LoginForm);
