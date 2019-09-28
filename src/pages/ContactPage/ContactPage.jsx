import React, { Component } from "react";
import { Prompt } from "react-router-dom";
import callApi from "../../utils/callApi";
import full_bg from "../../img/bg-full.png";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      title: "",
      phone: "",
      content: "",
      isBlocking: false
    };
  }

  onChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
      isBlocking: value.length > 0
    });
  };

  onContact = e => {
    e.preventDefault();
    const { name, email, title, phone, content } = this.state;
    const data = {
      name: name,
      email: email,
      title: title,
      phone: phone,
      content: content
    };
    if (data.length > 0) {
      callApi("contact", "POST", data).then(res => {
        alert("Thông tin đã được gửi đến chúng tôi !!!");
        this.setState({
          name: "",
          email: "",
          title: "",
          phone: "",
          content: "",
          isBlocking: false
        });
      });
    } else {
      alert("Bạn chưa điền thông tin. Vui lòng nhập lại.");
    }
  };

  render() {
    const { name, email, title, phone, content, isBlocking } = this.state;
    return (
      <main>
        <Prompt
          when={isBlocking}
          message={location => `Bạn muốn chuyển trang đến ${location.pathname}`}
        />
        <img src={full_bg} alt="full-bg" className="bg" />
        <header className="header--contact" />
        <div className="contact">
          <h2 className="contact__title">
            Bạn cần giúp đỡ? Liên lạc ngay với chúng tôi
          </h2>

          <form method="post" action="#" className="contact__form">
            <div className="contact__left">
              <label className="contact__label " htmlFor="name">
                Tên
              </label>
              <div className="contact__text-field u-margin-bottom-small">
                <input
                  className="contact__input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Tên bạn"
                  value={name}
                  onChange={this.onChange}
                  required
                />
              </div>

              <label className="contact__label" htmlFor="email">
                Email
              </label>
              <div className="contact__text-field u-margin-bottom-small">
                <input
                  className="contact__input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.onChange}
                  required
                />
              </div>

              <label className="contact__label" htmlFor="title">
                Tiêu đề
              </label>
              <div className="contact__text-field u-margin-bottom-small">
                <input
                  className="contact__input"
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Tiêu đề"
                  value={title}
                  onChange={this.onChange}
                  required
                />
              </div>

              <label className="contact__label" htmlFor="phone">
                Điện thoại
              </label>
              <div className="contact__text-field u-margin-bottom-small">
                <input
                  className="contact__input"
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Điện thoại"
                  value={phone}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>

            <div className="contact__right">
              <label className="contact__right--title contact__label u-margin-bottom-small">
                Nội dung
              </label>
              <div className="contact__right--text-area">
                <textarea
                  className="contact__right--text-area-input"
                  name="content"
                  placeholder="Nội dung"
                  value={content}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="contact__submit">
              <input
                className="contact__submit--btn"
                type="submit"
                value="Gửi"
                onClick={this.onContact}
              />
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default ContactPage;
