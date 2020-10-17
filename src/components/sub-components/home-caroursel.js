import React from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../actions/index';

const HomeCarousel  = props => {
  return (
    <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div id="topperCarousel" class="carousel slide" data-ride="carousel">
                        <ul class="carousel-indicators">
                            <li data-target="#topperCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#topperCarousel" data-slide-to="1"></li>
                            <li data-target="#topperCarousel" data-slide-to="2"></li>
                            <li data-target="#topperCarousel" data-slide-to="3"></li>
                            <li data-target="#topperCarousel" data-slide-to="4"></li>
                            <li data-target="#topperCarousel" data-slide-to="5"></li>
                            <li data-target="#topperCarousel" data-slide-to="6"></li>
                        </ul>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="image/carousel-hampe-01.jpg" alt="Hampe" class="img-fluid" />
                                <div class="carousel-caption">
                                    <h3>Hampe</h3>
                                    <p>World's largest open-air museum</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="image/carousel-ajanta-ellora.jpg" alt="Ajanta ellora" class="img-fluid" />
                                <div class="carousel-caption">
                                    <h3>Ajanata ellora</h3>
                                    <p>Maharastra, India</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="image/carousel-joga-jalapatha.jpg" alt="Joga Jalapatha" class="img-fluid" />
                                <div class="carousel-caption">
                                    <h3>Joga Jalapatha</h3>
                                    <p>Witness the spectacular cascade!</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="image/carousel-elephant.jpg" alt="Karnataka wild" class="img-fluid" />
                                <div class="carousel-caption">
                                    <h3>Karnataka wild</h3>
                                    <p>Karnataka's epic beauty compiled ...</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="image/carousel-yaana.jpg" alt="Yaana" class="img-fluid" />
                                <div class="carousel-caption">
                                    <h3>Yaana</h3>
                                    <p>Exquisite Karnataka: discover new world</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="image/carousel-shravanabelagola.jpg" alt="Shravanabelagola" class="img-fluid" />
                                <div class="carousel-caption">
                                    <h3>Shravanabelagola</h3>
                                    <p>The holy town of Shravanabelagola beckons</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="image/carousel-kambala.jpg" alt="Kambala" class="img-fluid" />
                                <div class="carousel-caption">
                                    <h3>Kamabala</h3>
                                    <p>Karnataka coastal festival excitement</p>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#topperCarousel" data-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                        </a>
                        <a class="carousel-control-next" href="#topperCarousel" data-slide="next">
                            <span class="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
  );
  }

const mapDispatchToProps = {
  logIn
};
const mapStateToProps = state => ({

});


export default connect(mapStateToProps, mapDispatchToProps) (HomeCarousel);
