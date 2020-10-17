import React from 'react';
import {connect} from 'react-redux';
import queryString from 'query-string';
import {logIn} from '../../actions/index';
class Header extends React.Component {


 getActiveNav(path){
    let currentPath = window.location.pathname;
    return currentPath === path ? 'active' : '';
 }

  render() {
  return (
    <nav id="karnataBalaHeader" class="navbar navbar-expand-lg navbar-light bg-light sticky-top py-0">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerTop1" aria-controls="navbarTogglerTop1" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand py-0" href="#">
                <img src="image/KB-Logo.png" width="66" height="66" alt="" /> 
                <span class="karnata">Karnata</span><span class="bala">Bala</span>
            </a>
            <div class="collapse navbar-collapse" id="navbarTogglerTop1">
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    
                    <li className={`nav-item ${this.getActiveNav('/')}`}>
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>

                    <li className={`nav-item ${this.getActiveNav('/news')}`}>
                        <a class="nav-link" href="/news">News</a>
                    </li>

                    <li className={`nav-item ${this.getActiveNav('/gallery')}`}>
                        <a class="nav-link" href="/gallery">Gallery</a>
                    </li>

                    <li className={`nav-item ${this.getActiveNav('/blog')}`}>
                        <a class="nav-link" href="/blog">Blog</a>
                    </li>
                                      
                </ul>
                <form class="form-inline my-2 my-lg-0 login-wrap">
                    <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
                </form>
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
