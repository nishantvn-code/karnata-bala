import React from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../actions/index';

const HomeMainInfo  = props => {
  return (
    <div class="container-fluid">
    <div class="jumbotron k-jumbotron">            
    <div class="row justify-content-end">
        <div class="col-sm-7">
            <h3 class="red-color">ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವದ ಶುಭಾಶಯಗಳು - 2020</h3>
            <h1 class="pt-2 title-color">ಕರ್ಣಾಟಬಲಕ್ಕೆ ಸ್ವಾಗತ </h1>            
            <p class="mb-0">ಕನ್ನಡ ನುಡಿಯ, ಕನ್ನಡ ನಾಡಿನ ಹಾಗು ಕನ್ನಡಿಗರ ಹಿರಿಮೆಯನ್ನು ಜಗತ್ತಿಗೆ ಸಾರುವ ಒಂದು ಪ್ರಯತ್ನ. </p>
        </div>
    </div>
    
    <img src="image/Utsava_background.png" class="img-fluid rajyostava d-none d-md-block" />
</div>
</div>
  );
  }

const mapDispatchToProps = {
  logIn
};
const mapStateToProps = state => ({

});


export default connect(mapStateToProps, mapDispatchToProps) (HomeMainInfo);
