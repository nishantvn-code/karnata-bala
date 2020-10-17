import React from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../actions/index';
import HomeMainInfo from '../sub-components/home-main-info';
import HomeCarousel from '../sub-components/home-caroursel';
import EventsKannadaPara from '../sub-components/events-kannada-para';
import HrSpace from '../sub-components/hr-space';
import InSocialMedia from '../sub-components/in-social-media';
import AboutPoets from '../sub-components/about-poets';

class Home extends React.Component {

  componentDidMount(){

 }
  render() {
  return (
    <div className="container-fluid">
      <HomeMainInfo />
      <HomeCarousel />
      <EventsKannadaPara />
      <HrSpace />
      <InSocialMedia />
      {/* <AboutPoets /> */}
    </div>
  );
  }
}

const mapDispatchToProps = {
  logIn
};
const mapStateToProps = state => ({

});


export default connect(mapStateToProps, mapDispatchToProps) (Home);
