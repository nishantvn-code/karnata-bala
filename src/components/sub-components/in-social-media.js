import React from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../actions/index';

const InSocialMedia  = props => {
  return (
    <div class="row">
    <div class="col-sm-12">
        <div class="col-sm-12">
            <div class="head-wrap mb-4">
                <h1 class="head-line-01 text-center"> Social media KannadaPara </h1>
                <p class="sub-head-para-01 text-center">Karnataka on the back of social media campaigns by Pro-Kannada activists who range across the idological spectrum from the Left to the cultural right.</p>
            </div>
        </div>
    </div>
    <div class="col-sm-8 twitter-section">
        <div class="row">
            <div class="col-sm-6">
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <div class="twitter-img-wrap">
                                <img src="image/DhananjayActor.jpg" class="card-img rounded-circle" alt="..." />
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body pt-0">                                            
                                <p class="card-text">Why are you talking to me in Hindi that is written in the Latin Script when I'm in Bengaluru reading an English newspaper, @wildcrafttweet #StopHindiImposition</p>
                                <h5 class="card-title mb-1">Dhananjaya
                                    <a class="small" href="https://twitter.com/Dhananjayaka?s=20">@Dhananjayaka</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-4 ">
                            <div class="twitter-img-wrap">
                                <img src="image/PrajwalRevanna.jpg" class="card-img" alt="..." />
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">                                            
                                <p class="card-text">I have my full support for the Band which is being held by the Kannada organizations opposition to the Land Amendment, the APMC Act and the Central Governments's Agricultural Amendment.</p>
                                <h5 class="card-title mb-1">Prajwal
                                    <a class="small" href="https://twitter.com/iPrajwalRevanna?s=20">@iPrajwalRevanna</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <div class="twitter-img-wrap">
                                <img src="image/ChetanKannaActivist.jpg" class="card-img rounded-circle" alt="..." />
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body pt-0">                                            
                                <p class="card-text">@siddaramaiah, if you really believe in the federal / federal system, leave the Congress. Bring out a new party. We too join that party. Together</p>
                                <h5 class="card-title mb-1">Ganesh Chetan
                                    <a class="small" href="https://twitter.com/ganeshchetan?s=20">@ganeshchetan</a>
                                </h5>
                                <p class="small mt-0">Kannada Activist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-4 ">
                            <div class="twitter-img-wrap">
                                <img src="image/KrishnaDirector.jpg" class="card-img" alt="..." />
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">                                            
                                <p class="card-text">If the party and politicians who strongly advocate Kannadiga's aspirations are not in Kannada, we will lose ground like river water</p>
                                <h5 class="card-title mb-1">Krishna
                                    <a class="small" href="https://twitter.com/krisshdop?s=20">@krisshdop</a>
                                </h5>
                                <p class="small mt-0">Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="border-box mt-0 mb-4"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="head-wrap">
                    <h1 class="head-line-01">Karnataka Wild</h1>
                    <p class="sub-head-para-01">Karnataka is India's 6th largest state of which has a recorded forest area of 38720 km2 which constitutes 20.19% of the total geographical area of the state.</p>
                </div>
            </div>
            <div class="col-sm-12">
                <div class="embed-responsive embed-responsive-16by9 mb-4">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/QO79orOvYJA?autoplay=1&loop=1" allow="off" allowfullscreen></iframe>
                </div>
                <div class="karnata-wild-wrap d-none">
                    <img class="img-fluid w-100" src="image/KarnatakaWild.jpg" />
                </div>
            </div>
        </div>
    </div>
    
    
    <div class="col-sm-4">
        <ul class="nav nav-tabs social-tab">
            <li class="nav-item">
                <a class="nav-link active fa fa-twitter" data-toggle="tab" href="#home"></a>
            </li>
            <li class="nav-item">
                <a class="nav-link fa fa-facebook" data-toggle="tab" href="#menu1"></a>
            </li>
            <li class="nav-item">
                <a class="nav-link fa fa-instagram" data-toggle="tab" href="#menu2"></a>
            </li>
            <li class="nav-item">
                <a class="nav-link fa fa-youtube" data-toggle="tab" href="#menu3"></a>
            </li>
        </ul>
        <div class="tab-content social-tab-content">
            <div id="home" class="container tab-pane active">
                <img src="image/twitter-template-01.png" class="img-fluid tweet-bg" />
            </div>
            <div id="menu1" class="container tab-pane fade">
              <br />
                <h3>Facebook</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div id="menu2" class="container tab-pane fade">
              <br />
                <h3>Instagram</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
            <div id="menu3" class="container tab-pane fade">
              <br />
                <h3>YouTube</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
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


export default connect(mapStateToProps, mapDispatchToProps) (InSocialMedia);
