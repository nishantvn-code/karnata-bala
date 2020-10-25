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
                                    <h3>ಹOಪೆ</h3>
                                    <p>ವಿಶ್ವದ ಅತಿದೊಡ್ಡ ತೆರೆದ ಗಾಳಿ ವಸ್ತುಸಂಗ್ರಹಾಲಯ</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="image/carousel-ajanta-ellora.jpg" alt="Ajanta ellora" class="img-fluid" />
                                <div class="carousel-caption">
                                    <h3>ಅಜಂತ ಎಲ್ಲೋರಾ</h3>
                                    <p>ಮಹಾರಾಷ್ಟ್ರ, ಭಾರತ</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="image/carousel-joga-jalapatha.jpg" alt="Joga Jalapatha" class="img-fluid" />
                                <div class="carousel-caption">
                                    <h3>ಜೋಗ ಜಲಪಾಥ</h3>
                                    <p>ಅದ್ಭುತ ಕ್ಯಾಸ್ಕೇಡ್ಗೆ ಸಾಕ್ಷಿಯಾಗಿದೆ!</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="image/carousel-elephant.jpg" alt="Karnataka wild" class="img-fluid" />
                                <div class="carousel-caption">
                                    <h3>ಕರ್ನಾಟಕ ಕಾಡು</h3>
                                    <p>ಕರ್ನಾಟಕದ ಸೌಂದರ್ಯ ಸಂಕಲನ ...</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="image/carousel-yaana.jpg" alt="Yaana" class="img-fluid" />
                                <div class="carousel-caption">
                                    <h3>ಯಾನಾ</h3>
                                    <p>ಸೊಗಸಾದ ಕರ್ನಾಟಕ: ಹೊಸ ಪ್ರಪಂಚವನ್ನು ಅನ್ವೇಷಿಸಿ</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="image/carousel-shravanabelagola.jpg" alt="Shravanabelagola" class="img-fluid" />
                                <div class="carousel-caption">
                                    <h3>ಶ್ರವಣಬೆಳಗೊಳ</h3>
                                    <p>ಪವಿತ್ರ ಪಟ್ಟಣವಾದ ಶ್ರವಣಬೆಳಗೊಳ </p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="image/carousel-kambala.jpg" alt="Kambala" class="img-fluid" />
                                <div class="carousel-caption">
                                    <h3>ಕಂಬಳ</h3>
                                    <p>ಕರ್ನಾಟಕ ಕರಾವಳಿ ಹಬ್ಬದ ಸಂಭ್ರಮ</p>
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
