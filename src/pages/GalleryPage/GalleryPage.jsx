import React, { Component } from "react";
import callApi from "../../utils/callApi";
import full_bg from "../../img/bg-full.png";

class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      page: 1,
      key: "pet",
      hasMoreImg: true
    };
  }

  componentDidMount() {
    this.loadImg();
  }

  onChangeKey = key => {
    this.setState({ key: key, hasMoreImg: true, page: 1 });
    callApi(`gallery/${key}?page=1`)
      .then(res => {
        this.setState({ images: res.data });
        if (res.data.length < 20) {
          this.setState({
            hasMoreImg: false
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  loadImg = () => {
    const { key, page, images } = this.state;
    callApi(`gallery/${key}?page=${page}`)
      .then(res => {
        this.setState({ images: [...images, ...res.data] });
        if (res.data.length < 20) {
          this.setState({
            hasMoreImg: false
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  loadMore = e => {
    e.preventDefault();
    if (this.state.hasMoreImg) {
      this.setState(
        prevState => ({
          page: prevState.page + 1
        }),
        this.loadImg
      );
    }
  };

  render() {
    const { images, hasMoreImg } = this.state;
    return (
      <main>
        <img src={full_bg} alt="full-bg" className="bg" />
        <header className="header--gallery" />

        <section className="gallery">
          <div className="gallery__title">Hình Ảnh</div>

          <div className="gallery__sort-list">
            <button
              className="gallery__sort-button"
              onClick={() => this.onChangeKey("pet")}
            >
              Tất cả
            </button>

            <button
              className="gallery__sort-button"
              onClick={() => this.onChangeKey("dog")}
            >
              Chó
            </button>

            <button
              className="gallery__sort-button"
              onClick={() => this.onChangeKey("cat")}
            >
              Mèo
            </button>

            <div className="gallery__dropdown">
              <button className="gallery__sort-button gallery__drop-btn">
                Khác
              </button>

              <div class="gallery__dropdown-content">
                <button
                  className="gallery__dropdown-btn"
                  onClick={() => this.onChangeKey("hamster")}
                >
                  Hamster
                </button>
                <button
                  className="gallery__dropdown-btn"
                  onClick={() => this.onChangeKey("rabbit")}
                >
                  Thỏ
                </button>
                <button
                  className="gallery__dropdown-btn"
                  onClick={() => this.onChangeKey("hedgehog")}
                >
                  Nhím
                </button>
              </div>
            </div>
          </div>

          <div className="gallery__image--collection">
            {images.map((image, index) => (
              <div className="gallery__image--sprout" key={index}>
                <img
                  src={image.link}
                  alt="gallery-displayed"
                  className="gallery__image--displayed"
                />
              </div>
            ))}
          </div>

          <div className="gallery__button-loadmore-sprout">
            {hasMoreImg ? (
              <a
                href="#"
                onClick={this.loadMore}
                className="gallery__button-loadmore"
              >
                Xem thêm ^_^
              </a>
            ) : (
              ""
            )}
          </div>
        </section>
      </main>
    );
  }
}

export default GalleryPage;
