import React from "react";
import { connect } from "react-redux";
import { logIn } from "../../actions/index";

const YoutubeVideo = (props) => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="head-wrap">
            <h1 class="head-line-01 text-center">ಕರ್ಣಾಟಬಲ</h1>
            <p class="sub-head-para-01 text-center">
             ಕರ್ಣಾಟಬಲ ಇನ್ ಯೂಟ್ಯೂಬ್.
            </p>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="embed-responsive embed-responsive-16by9 mb-4">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/HlfXv2aDDYQ?autoplay=1&loop=1"
              // src="http://www.youtube.com/embed/?listType=user_uploads&list=ಕರ್ಣಾಟಬಲKarnatabala"
              allow="off"
              allowfullscreen
            ></iframe>
          </div>
          <div class="karnata-wild-wrap d-none">
            <img class="img-fluid w-100" src="image/KarnatakaWild.jpg" />
          </div>
        </div>
      </div>
      </div>
  );
};

const mapDispatchToProps = {
  logIn,
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeVideo);
