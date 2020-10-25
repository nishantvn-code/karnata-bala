
import React from "react";
import { connect } from "react-redux";
import { logIn } from "../../actions/index";

const NewsDetails = (props) => {
  return (
    <div class="container-fluid">
    <div class="row">
        <div class="jumbotron-blog-img mb-4">
            <img class="img-fluid" src="https://i.ytimg.com/vi/TnHNFjIqG-w/maxresdefault.jpg" alt="" />
        </div>                
    </div>
    
    <div class="row">
        <div class="col-sm-3">
            <p class="mb-0">Author</p>
            <h3 class="widget-head my-0"> Bhuvanesh Kardasaiah</h3>
            <p class="date my-1"><i class="fa fa-clock-o mr-2"></i>12 October 2020</p>
        </div>
        <div class="col-sm-6">
            <div class="story-container">
                <h1 class="head-line-01 black-color mb-3"> Kodagu’s popular tourist attractions and pristine waterfalls are gearing up for reopening.</h1>
                <p class="story-paragraph">After a gap of nearly five months. This could be an economic boost to the district which has had to contend with not only the pandemic but devastating rains. Meanwhile, the hospitality industry in Kodagu is reopening from September 1 after a long gap.</p>
    
                <p class="story-paragraph">However, no decision had been taken yet on allowing the public to visit Talacauvery and Bhagamandala, which witnessed landslips recently. Cauvery Nisargadhama on the banks of the Cauvery and Dubare elephant camp, which had been closed since March 23, are all set to be reopened from next week as the forest authorities were preparing to unlock the popular sites.</p>                        
                
                <div class="row pt-2">
                    <div class="col-sm-4">
                        <div class="story-img-library">
                            <img class="img-fluid" src="http://themelooks.us/demo/bloggypress/html/preview/img/blog-img/post-detail-01.jpg" alt="" />
                        </div>
                    </div>
    
                    <div class="col-sm-4">
                        <div class="story-img-library">
                            <img class="img-fluid" src="http://themelooks.us/demo/bloggypress/html/preview/img/blog-img/post-detail-02.jpg" alt="" />
                        </div>
                    </div>
    
                    <div class="col-sm-4">
                        <div class="story-img-library">
                            <img class="img-fluid" src="http://themelooks.us/demo/bloggypress/html/preview/img/blog-img/post-detail-03.jpg" alt="" />
                        </div>
                    </div>
    
                    <div class="col-sm-4">
                        <div class="story-img-library">
                            <img class="img-fluid" src="http://themelooks.us/demo/bloggypress/html/preview/img/blog-img/post-detail-04.jpg" alt="" />
                        </div>
                    </div>
    
                    <div class="col-sm-4">
                        <div class="story-img-library">
                            <img class="img-fluid" src="http://themelooks.us/demo/bloggypress/html/preview/img/blog-img/post-detail-05.jpg" alt="" />
                        </div>
                    </div>
    
                    <div class="col-sm-4">
                        <div class="story-img-library">
                            <img class="img-fluid" src="http://themelooks.us/demo/bloggypress/html/preview/img/blog-img/post-detail-06.jpg" alt="" />
                        </div>
                    </div>
                </div>
    
                <p class="story-paragraph">Deputy Conservator of Forest Prabhakaran told The Hindu that preparations are under way for their reopening with strict implementation of precautions. Mandalapatti, known as a trekkers’ paradise and Iruppu waterfalls are also being reopened for the visitors shortly. Abbey waterfalls, another famous tourist attraction, is expected to reopen for visitors on Monday.</p>
                
                <p class="story-paragraph">Deputy Conservator of Forest Prabhakaran told The Hindu that preparations are under way for their reopening with strict implementation of precautions. Mandalapatti, known as a trekkers’ paradise and Iruppu waterfalls are also being reopened for the visitors shortly. Abbey waterfalls, another famous tourist attraction, is expected to reopen for visitors on Monday.</p>
                
                <blockquote>
                    <p class="my-0">In Dubare, we are barricading so that the public keeps a safe distance from the elephants unlike the past. In Dubare, we are barricading so that the public keeps a safe distance from the elephants unlike the past. </p>
                </blockquote>
                
                <p>Speaking to The Hindu, Karnataka Tourism Assistant Director Raghavendra said tourist attractions had not been reopened in Kodagu although many sites resumed operations in other parts of the State. A week ago, Raja Seat in Madikeri was reopened after the rains receded and the flood situation across Kodagu eased. Mr. Raghavendra said the tourist sites coming under the control of Gram Panchayats are being reopened from Monday.</p>
                
                <div class="clearfix">
                    <ul class="nav social-nav float-right">
                        <li><strong>Share On:</strong></li>
                        <li>
                            <a href="#" title="Share on Facebook"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="#" title="Share on Twitter"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#" title="Share on Google+"><i class="fa fa-google-plus"></i></a>
                        </li>
                        <li>
                            <a href="#" title="Share on Linkedin"><i class="fa fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="#" title="Share on Instagram"><i class="fa fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
                
                <div class="pager-wrapper py-3">
                    <ul class="nav pager-nav">
                        <li><a href="#"><i class="fa fa-long-arrow-left"></i>Older Posts</a></li>
                        <li><a href="#">Newer Posts<i class="fa fa-long-arrow-right"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="widget-list-container">
                <h2 class="widget-title mt-1 mb-3">Popular Posts</h2>
                <div class="posts-widget pb-3">
                    <ul class="nav">
                        <li class="clearfix mb-3">
                            <div class="img-widget-wrap">
                                <a href="#">
                                    <img class="img-fluid" src="https://i.pinimg.com/474x/a5/cf/25/a5cf2515b51f63dd7130d4a9fb58d18e.jpg" alt="" />
                                </a>
                            </div>
    
                            <div class="widget-info-wrap">
                                <p class="widget-category mb-1">Travel</p>
                                <h3 class="widget-head">
                                    <a href="blog-details.html" class="btn-link">Wherever You Go, I'll Be There</a>
                                </h3>
                                <p class="date mt-3 mb-1"><i class="fa fa-clock-o mr-2"></i>12 June 2020</p>
                            </div>
                        </li>
                        
                        <li class="clearfix mb-3">
                            <div class="img-widget-wrap">
                                <a href="#">
                                    <img class="img-fluid" src="https://static2.tripoto.com/media/filter/tst/img/23706/TripDocument/1485828375_c360_2017_01_30_19_42_59_177.jpg" alt="" />
                                </a>
                            </div>
    
                            <div class="widget-info-wrap">
                                <p class="widget-category mb-1">Trek</p>
                                <h3 class="widget-head">
                                    <a href="blog-details.html" class="btn-link">A solo trip to the world heritage site of Karnataka</a>
                                </h3>
                                <p class="date mt-3 mb-1"><i class="fa fa-clock-o mr-2"></i>12 June 2020</p>
                            </div>
                        </li>
                        
                        <li class="clearfix mb-3">
                            <div class="img-widget-wrap">
                                <a href="#">
                                    <img class="img-fluid" src="https://static2.tripoto.com/media/filter/tst/img/242124/TripDocument/1452949964_img_20160109_130107.jpg" alt="" />
                                </a>
                            </div>
    
                            <div class="widget-info-wrap">
                                <p class="widget-category mb-1">History</p>
                                <h3 class="widget-head">
                                    <a href="blog-details.html" class="btn-link">A solo trip to the world heritage site of Karnataka</a>
                                </h3>
                                <p class="date mt-3 mb-1"><i class="fa fa-clock-o mr-2"></i>12 June 2020</p>
                            </div>
                        </li>
                        
                        <li class="clearfix mb-3">
                            <div class="img-widget-wrap">
                                <a href="#">
                                    <img class="img-fluid" src="https://i.pinimg.com/236x/9f/77/98/9f7798433f896b516eacfbc6c65e080b--india-culture-hampi.jpg" alt="" />
                                </a>
                            </div>
    
                            <div class="widget-info-wrap">
                                <p class="widget-category mb-1">Temple</p>
                                <h3 class="widget-head">
                                    <a href="blog-details.html" class="btn-link"> Middle of Mookambika National Park has existed since time immemorial.</a>
                                </h3>
                                <p class="date mt-3 mb-1"><i class="fa fa-clock-o mr-2"></i>12 June 2020</p>
                            </div>
                        </li>
                        
                        <li class="clearfix mb-3">
                            <div class="img-widget-wrap">
                                <a href="#">
                                    <img class="img-fluid" src="https://c8.alamy.com/comp/2C5EARC/kambala-cattle-buffalo-race-held-in-the-district-of-mangalorekarnatakasouth-indiaindiaharvest-festivalasiakambala-keralakampala-2C5EARC.jpg" alt="" />
                                </a>
                            </div>
    
                            <div class="widget-info-wrap">
                                <p class="widget-category mb-1">Gramina Kride</p>
                                <h3 class="widget-head">
                                    <a href="blog-details.html" class="btn-link"> Kambala cattle buffalo race held in DK Karnataka harvest festival</a>
                                </h3>
                                <p class="date mt-3 mb-1"><i class="fa fa-clock-o mr-2"></i>12 June 2020</p>
                            </div>
                        </li>
                    </ul>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetails);
