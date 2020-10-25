import React from "react";
import { connect } from "react-redux";
import { logIn } from "../../actions/index";

const YoutubeVideo = (props) => {
  return (
      <div class="row">
        <div class="col-sm-12">
          <div class="head-wrap">
            <h1 class="head-line-01">Karnataka Wild</h1>
            <p class="sub-head-para-01">
              Karnataka is India's 6th largest state of which has a recorded
              forest area of 38720 km2 which constitutes 20.19% of the total
              geographical area of the state.
            </p>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="embed-responsive embed-responsive-16by9 mb-4">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/QO79orOvYJA?autoplay=1&loop=1"
              allow="off"
              allowfullscreen
            ></iframe>
          </div>
          <div class="karnata-wild-wrap d-none">
            <img class="img-fluid w-100" src="image/KarnatakaWild.jpg" />
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
