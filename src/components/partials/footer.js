import React from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../actions/index';
class Footer extends React.Component {

  render() {
  return (
    <footer class="page-footer font-small blue pt-4">
            <div class="container-fluid text-center text-md-left">
                <div class="row">
                    <div class="col-md-6 mt-md-0 my-3">
                        <div class="foot-kb-logo">
                            <img class="logo" src="/image/KB-Logo.png" /> <span class="ml-2 karnata">Karnata</span><span class="bala">Bala</span>
                        </div>
                    </div>
                    <div class="col-md-3 mb-md-0 mb-3"> </div>                    
                    <div class="col-md-3 mb-md-0 mt-2">                     
                        <ul class="social-media-icons">
                            <li>
                                <a href="https://m.facebook.com/Karnatabala" class="fa fa-facebook" target="_blank"></a>
                            </li>
                            <li>
                                <a href="https://mobile.twitter.com/karnatabala?lang=en" class="fa fa-twitter" target="_blank"></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/karnatabala/?hl=en" class="fa fa-instagram" target="_blank"></a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCWMEyhtdzjcB7ZWpx7Mar8Q" target="_blank" class="fa fa-youtube"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="footer-copyright text-center py-2">©2020 Copyright:
                <a class="font-weight-bold" href="https://www.youtube.com/channel/UCWMEyhtdzjcB7ZWpx7Mar8Q/featured">KarnataBala</a>
            </div>
        </footer>
  );
  }
}

const mapDispatchToProps = {
  logIn
};
const mapStateToProps = state => ({

});


export default connect(mapStateToProps, mapDispatchToProps) (Footer);
