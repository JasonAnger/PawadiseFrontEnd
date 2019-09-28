import React, { Component } from "react";
import { connect } from "react-redux";

import SeparationLine from "../../components/SeparationLine";
import { actEditProfileRequest } from "../../actions";
import full_bg from "../../img/bg-full.png";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      phone: "",
      avatar: null,
      address: {
        street: "",
        district: "",
        city: ""
      }
    };
  }

  componentDidMount() {
    if (this.props && this.props.auth && this.props.auth.user) {
      var { user } = this.props.auth;
      this.setNewState(user);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.auth.user) {
      const { user } = nextProps.auth;
      this.setNewState(user);
    }
  }

  setNewState = user => {
    this.setState({
      name: user.name,
      email: user.email,
      age: user.age,
      phone: user.phoneNumber,
      avatar: user.avatar,
      address: user.address || {}
    });
  };

  onChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  };

  onChangeStreet = e => {
    let newState = Object.assign({}, this.state);
    newState.address.street = e.target.value;
    this.setState(newState);
  };

  onChangeDistrict = e => {
    let newState = Object.assign({}, this.state);
    newState.address.district = e.target.value;
    this.setState(newState);
  };

  onChangeCity = e => {
    let newState = Object.assign({}, this.state);
    newState.address.city = e.target.value;
    this.setState(newState);
  };

  fileSelectedHandler = e => {
    this.setState({
      avatar: e.target.files[0]
    });
  };

  onSave = e => {
    e.preventDefault();
    const {
      name,
      email,
      age,
      phone,
      avatar,
      address: { street, district, city }
    } = this.state;
    const bodyFormData = new FormData();
    bodyFormData.set("name", name);
    bodyFormData.append("email", email);
    bodyFormData.append("age", age);
    bodyFormData.append("phoneNumber", phone);
    bodyFormData.append("avatar", avatar);
    bodyFormData.append("street", street);
    bodyFormData.append("district", district);
    bodyFormData.append("city", city);
    if (bodyFormData !== null) {
      this.props.onUpdateProfile(bodyFormData);
      alert("Chỉnh sửa thông tin thành công ^-^");
    }
  };

  render() {
    const { name, email, age, phone, avatar, address } = this.state;

    return (
      <main>
        <img src={full_bg} alt="full-bg" className="bg" />
        <header className="header--profile" />

        <section className="profile">
          <h2 className="profile__title">Thông tin cá nhân</h2>

          <SeparationLine
            position="relative"
            bottom="5"
            opacity=".2"
            margin="0 14rem"
          />

          <div className="profile__info-sprout">
            <div className="profile__info--text-container">
              <label className="profile__attribute">Tên</label>

              <div className="profile__value-sprout">
                <input
                  className="profile__value"
                  type="text"
                  placeholder="Quý danh"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="profile__info--text-container">
              <label className="profile__attribute">Tuổi</label>

              <div className="profile__value-sprout">
                <input
                  className="profile__value"
                  type="text"
                  placeholder="Bạn bao nhiêu nồi bánh chưng rồi"
                  name="age"
                  value={age}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="profile__info--text-container">
              <label className="profile__attribute">Email</label>

              <div className="profile__value-sprout">
                <input
                  className="profile__value"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="profile__info--text-container">
              <label className="profile__attribute">Số điện thoại</label>

              <div className="profile__value-sprout">
                <input
                  className="profile__value"
                  type="text"
                  placeholder="Giúp chúng tôi giữ liên lạc"
                  name="phone"
                  onChange={this.onChange}
                  value={phone}
                />
              </div>
            </div>

            <div className="profile__info--text-container">
              <label className="profile__attribute">Đường</label>

              <div className="profile__value-sprout">
                <input
                  className="profile__value"
                  type="text"
                  placeholder="Bạn nhà ở Đường nào ?"
                  name="street"
                  value={address.street}
                  onChange={this.onChangeStreet}
                />
              </div>
            </div>

            <div className="profile__info--text-container">
              <label className="profile__attribute">Quận</label>

              <div className="profile__value-sprout">
                <input
                  className="profile__value"
                  type="text"
                  placeholder="Nhà bạn ở Quận nào ?"
                  name="district"
                  value={address.district}
                  onChange={this.onChangeDistrict}
                />
              </div>
            </div>

            <div className="profile__info--text-container">
              <label className="profile__attribute">Thành phố</label>

              <div className="profile__value-sprout">
                <input
                  className="profile__value"
                  type="text"
                  placeholder="Bạn ở Thành Phố nào ?"
                  name="city"
                  value={address.city}
                  onChange={this.onChangeCity}
                />
              </div>
            </div>
          </div>

          <button className="profile__save-button" onClick={this.onSave}>
            Lưu
          </button>

          <div className="profile__avatar-container">
            <img
              src={`http://pawadise.cf:3000/${avatar}`}
              alt="user avatar"
              className="profile__avatar"
            />
          </div>

          <input
            type="file"
            style={{ display: "none" }}
            onChange={this.fileSelectedHandler}
            ref={fileInput => (this.fileInput = fileInput)}
          />
          <button
            className="profile__change-avatar-button"
            onClick={() => this.fileInput.click()}
          >
            Chọn ảnh
          </button>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateProfile: user => {
      dispatch(actEditProfileRequest(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
