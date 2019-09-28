import React, { Component } from "react";
import { Prompt } from "react-router-dom";
import { connect } from "react-redux";
import SeparationLine from "./SeparationLine";
import { actAddNewRequest } from "../actions";

import blue_paw from "../img/paw.png";
import avatar from "../img/user-avatar-sample.png";

class PostingBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      photos: [],
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

  fileSelectedHandler = e => {
    const files = Array.from(e.target.files);
    this.setState({
      photos: files
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { message, photos } = this.state;
    let bodyFormData = new FormData();
    bodyFormData.set("body", message);
    photos.map(file => bodyFormData.append("photos", file));
    if (message.length > 0 || photos.length > 0) {
      this.props.onAddNew(bodyFormData);
      this.setState({
        message: "",
        photos: [],
        isBlocking: false
      });
    }
  };
  render() {
    const { isBlocking, photos } = this.state;
    console.log(photos);

    return (
      <div className="news__post-container">
        <div className="news__post-container--header">
          <p className="news__post-container--header--paragraph">
            Tạo bài viết
          </p>
          <input
            type="file"
            name="files"
            style={{ display: "none" }}
            onChange={this.fileSelectedHandler}
            ref={fileInput => (this.fileInput = fileInput)}
            multiple
          />
          
        </div>
        <Prompt
          when={isBlocking}
          message={location => `Bạn muốn chuyển trang đến ${location.pathname}`}
        />
        <div className="news__post-container--body">
          <div className="news__post-container--body--avatar-sprout">
            <img
              src={avatar}
              alt="user-avatar"
              className="news__post-container--body--avatar-img"
            />
          </div>

          <div className="news__post-container--body--sprout">
            <textarea
              className="news__post-container--body--content"
              name="message"
              placeholder="Bạn đang nghĩ gì?"
              value={this.state.message}
              onChange={this.onChange}
            />
          </div>
          
          <button
            className="news__post-container--upload_photo-btn"
            onClick={() => this.fileInput.click()}
          >
            Chọn ảnh
          </button>
          <button
            className="btn__action btn__action--post"
            onClick={this.onSubmit}
          >
            Đăng
            <img
              src={blue_paw}
              alt="paw_icon"
              className="btn__action--paw--post"
            />
          </button>
        </div>

        <SeparationLine
          position="relative"
          bottom="9rem"
          opacity=".2"
          margin="0 5rem"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddNew: data => {
      dispatch(actAddNewRequest(data));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostingBlock);
