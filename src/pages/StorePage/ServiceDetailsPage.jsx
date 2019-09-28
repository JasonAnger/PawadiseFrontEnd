import React, { Component } from "react";
import callApi from "../../utils/callApi";
import StoreDetailHeader from "./StoreDetailHeader";
import StoreDetailDescription from "./StoreDetailDescription";
import StoreDetailImage from "./StoreDetailImage";
import full_bg from "../../img/bg-full.png";

class ServiceDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      photos: [],
      description: []
    };
  }
  componentDidMount() {
    const { match } = this.props;
    callApi(`stores/${match.params.slug}`).then(res => {
      this.setState({
        info: res.data,
        photos: res.data.photos,
        description: res.data.description
      });
    }).catch(err => {
      console.log(err);      
    });
  }
  render() {
    const { info, photos, description } = this.state;

    return (
      <div>
        <img src={full_bg} alt="full-bg" className="bg" />
        <StoreDetailHeader info={info} photos={photos[0]} />
        <StoreDetailDescription info={info} description={description} />

        <p className="store__big-title">Hình ảnh</p>

        <div className="store__product--sprout">
          {photos.map((photo, index) => (
            <StoreDetailImage
              img={`http://pawadise.cf:3000/${photo}`}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ServiceDetailsPage;
