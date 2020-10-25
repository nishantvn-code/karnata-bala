import React from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../actions/index';
class News extends React.Component {

  render() {
  return (
    <div className="container-fluid">
     <div class="container-fluid mt-3">
            <div class="row">
                <div class="col-sm-9">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="blog-post-container">
                                <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails post-blog-img-wrap" data-ride="carousel">
                                    <div class="carousel-inner" role="listbox">
                                        <div class="carousel-item active">
                                          <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg" alt="First slide" />
                                        </div>
                                        <div class="carousel-item">
                                          <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg" alt="Second slide" />
                                        </div>
                                        <div class="carousel-item">
                                          <img class="d-block w-100" src="https://i.ytimg.com/vi/_CUqVIXt5hg/maxresdefault.jpg" alt="Third slide" />
                                        </div>
                                    </div>

                                    <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>

                                <div class="blog-info-container mt-3">
                                    <h3 class="small-sub-head-01">Karnataka Food</h3>
                                    <h3 class="blog-head-line-01 mt-3 black-color">Stimulating the desire in you to cook some authentic Karnataka meal</h3>
                                    <p class="blog-sub-head-para-01">Kori Gassi is a delectable chicken curry bathed in the flavours of coconut and tangy tamarind. It is a speciality of the Mangalore where Kori means chicken</p>
                                    <div class="btn-wrap">
                                        <a class="btn btn-md btn-other" href="suddi-detail.html" target="_blank">Read full artical</a>
                                    </div>
                                    <div class="post-meta clearfix mt-3">
                                        <p class="float-left mb-0"> <i class="fa fa-clock-o "></i> <span>12 June 2017</span> <a href="#">by Veera Kesari</a> </p>
                                        <p class="float-right mb-0"> <i class="fa fa-heart-o"></i> <span>112</span> </p>
                                        <p class="float-right mr-4 mb-0"> <i class="fa fa-comments-o"></i> <span class="black-color">52</span>
                                        </p>
                                    </div>
                                    <hr class="my-3" />
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-sm-6">
                            <div class="blog-post-container">
                                <div class="post-blog-img-wrap">
                                    <img class="img-fluid" src="https://ramaarya.files.wordpress.com/2020/02/belur-temple-10.jpg?w=640" />
                                </div>

                                <div class="blog-info-container mt-3">
                                    <h3 class="small-sub-head-01">Hoysala dynasty</h3>
                                    <h3 class="blog-head-line-01 mt-3 black-color">Hoysala dynasty, family ruled in India from about 1006 to about 1346CE</h3>
                                    <p class="blog-sub-head-para-01">The Hoysala Empire was a Kannadiga power originating from the Indian subcontinent that ruled most of what is now Karnataka. ruled most of what is now Karnataka.</p>
                                    <div class="btn-wrap">
                                        <a class="btn btn-md btn-other" href="suddi-detail.html" target="_blank">Read full artical</a>
                                    </div>
                                    <div class="post-meta clearfix mt-3">
                                        <p class="float-left mb-0"> <i class="fa fa-clock-o "></i> <span>12 June 2017</span> <a href="#">by Channakeshava Hassan</a> </p>
                                        <p class="float-right mb-0"> <i class="fa fa-heart-o"></i> <span>112</span> </p>
                                        <p class="float-right mr-4 mb-0"> <i class="fa fa-comments-o"></i> <span class="black-color">52</span>
                                        </p>
                                    </div>
                                    <hr class="my-3" />
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-sm-6">
                            <div class="blog-post-container">
                                <div class="post-blog-img-wrap">
                                    <img class="img-fluid" src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1538401805%2Fv7buhujiqasqcfsurrpt.jpg" />
                                </div>

                                <div class="blog-info-container mt-3">
                                    <h3 class="small-sub-head-01">Western Ghats</h3>
                                    <h3 class="blog-head-line-01 mt-3 black-color">Biodiversity is a significant source of moisture for monsoon in western ghats</h3>
                                    <p class="blog-sub-head-para-01">The mountain range that runs along the west coast of peninsular India from Tamil Nadu through Kerala, Karnataka and Goa to Maharastra is known as the Western Ghats </p>
                                    <div class="btn-wrap">
                                        <a class="btn btn-md btn-other" href="suddi-detail.html" target="_blank">Read full artical</a>
                                    </div>
                                    <div class="post-meta clearfix mt-3">
                                        <p class="float-left mb-0"> <i class="fa fa-clock-o "></i> <span>12 June 2017</span> <a href="#">by Pu. Chan. Te.</a> </p>
                                        <p class="float-right mb-0"> <i class="fa fa-heart-o"></i> <span>112</span> </p>
                                        <p class="float-right mr-4 mb-0"> <i class="fa fa-comments-o"></i> <span class="black-color">52</span>
                                        </p>
                                    </div>
                                    <hr class="my-3" />
                                </div>
                            </div>
                        </div>
                        
                         <div class="col-sm-6">
                            <div class="blog-post-container">
                                <div class="post-blog-img-wrap">
                                    <img class="img-fluid" src="https://images.thrillophilia.com/image/upload/s--Jb872GD0--/c_fill,g_auto/v1/attractions/images/000/004/083/original/1280px-Durga_Temple.jpg.jpg" />
                                </div>

                                <div class="blog-info-container mt-3">
                                    <h3 class="small-sub-head-01">Karnataka Tourism</h3>
                                    <h3 class="blog-head-line-01 mt-3 black-color">Scorching heat sends tourists scampering out of beautiful North Karnataka</h3>
                                    <p class="blog-sub-head-para-01"> Back-to-back drought and an unusually sweltering summer with a record rise in mercury levels have severely affected Karnataka’s tourism. record rise in mercury levels have severely affected ... </p>
                                    <div class="btn-wrap">
                                        <a class="btn btn-md btn-other" href="suddi-detail.html" target="_blank">Read full artical</a>
                                    </div>
                                    <div class="post-meta clearfix mt-3">
                                        <p class="float-left mb-0"> <i class="fa fa-clock-o "></i> <span>12 June 2017</span> <a href="#">by Suresh Bagalakote</a> </p>
                                        <p class="float-right mb-0"> <i class="fa fa-heart-o"></i> <span>112</span> </p>
                                        <p class="float-right mr-4 mb-0"> <i class="fa fa-comments-o"></i> <span class="black-color">52</span>
                                        </p>
                                    </div>
                                    <hr class="my-3" />
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-sm-6">
                            <div class="blog-post-container">
                                <div class="post-blog-img-wrap">
                                    <iframe width="460" height="204" src="https://www.youtube.com/embed/6gdytFv0qh8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div class="blog-info-container mt-3">
                                    <h3 class="small-sub-head-01">Karnataka Tourism</h3>
                                    <h3 class="blog-head-line-01 mt-3 black-color">Scorching heat sends tourists scampering out of beatutiful North Karnataka</h3>
                                    <p class="blog-sub-head-para-01"> Back-to-back drought and an unusually sweltering summer with a record rise in mercury levels have severely affected Karnataka’s tourism. record rise in mercury levels have severely affected .. </p>
                                    <div class="btn-wrap">
                                        <a class="btn btn-md btn-other" href="suddi-detail.html" target="_blank">Read full artical</a>
                                    </div>
                                    <div class="post-meta clearfix mt-3">
                                        <p class="float-left mb-0"> <i class="fa fa-clock-o "></i> <span>12 June 2017</span> <a href="#">by Suresh Bagalakote</a> </p>
                                        <p class="float-right mb-0"> <i class="fa fa-heart-o"></i> <span>112</span> </p>
                                        <p class="float-right mr-4 mb-0"> <i class="fa fa-comments-o"></i> <span class="black-color">52</span>
                                        </p>
                                    </div>
                                    <hr class="my-3" />
                                </div>
                            </div>
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
    </div>
  );
  }
}

const mapDispatchToProps = {
  logIn
};
const mapStateToProps = state => ({

});


export default connect(mapStateToProps, mapDispatchToProps) (News);
