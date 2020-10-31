import React from 'react';
import {connect} from 'react-redux';
import queryString from 'query-string';
import {logIn} from '../../actions/index';
class Header extends React.Component {


 getActiveNav(path){
    let currentPath = window.location.pathname;
    if(path === '/news' && currentPath.includes('/newsdetails')){
        return 'active';
    }
    return currentPath === path ? 'active' : '';
 }

  render() {
  return (
    <nav id="karnataBalaHeader" class="navbar navbar-expand-lg navbar-light bg-light sticky-top py-0">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerTop1" aria-controls="navbarTogglerTop1" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand py-0" href="/">
                <img class="logo" src="/image/KB-Logo.png" width="66" height="66" alt="" /> 
                <span class="karnata">ಕರ್ಣಾಟ</span><span class="bala">ಬಲ</span>
            </a>
            <div class="collapse navbar-collapse" id="navbarTogglerTop1">
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    
                    <li className={`nav-item ${this.getActiveNav('/')}`}>
                        <a class="nav-link" href="/">ಮುಖಪುಟ <span class="sr-only">(current)</span></a>
                    </li>

                    <li className={`nav-item ${this.getActiveNav('/news') || this.getActiveNav('/newsdetails')}`}>
                        <a class="nav-link" href="/news">ಸುದ್ದಿ</a>
                    </li>

                    <li className={`nav-item ${this.getActiveNav('/gallery')}`}>
                        <a class="nav-link" href="/gallery">ಗ್ಯಾಲರಿ</a>
                    </li>

                    {/* <li className={`nav-item ${this.getActiveNav('/blog')}`}>
                        <a class="nav-link" href="/blog">ಬ್ಲಾಗ್</a>
                    </li> */}

                    <li className={`nav-item ${this.getActiveNav('/aboutus')}`}>
                        <a class="nav-link" href="/aboutus">ಕರ್ಣಾಟಬಲ</a>
                    </li>               
                </ul>
                {/* <form class="form-inline my-2 my-lg-0 login-wrap">
                    <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
                </form> */}
            </div>
        </nav>
  );
  }
}

const mapDispatchToProps = {
  logIn
};
const mapStateToProps = state => ({

});


export default connect(mapStateToProps, mapDispatchToProps) (Header);
