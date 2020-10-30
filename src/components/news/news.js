import React from 'react';
import {connect} from 'react-redux';
import {getNewsPosts} from '../../actions/index';

class News extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    componentDidMount(){
        this.props.getNewsPosts();
    }
  
  render() {
      const newsPosts = this.props.newsPosts;
  return (
    <div className="container-fluid">
     <div class="container-fluid mt-3">
            <div class="row">
                <div class="col-sm-9">
                    <div class="row">
                        {newsPosts && newsPosts.map(post => {
                            return   <div class="col-sm-6">
                            <div class="blog-post-container">
                                <div class="post-blog-img-wrap">
                                    <img class="img-fluid"  src={post.imgSource} />
                                </div>

                                <div class="blog-info-container mt-3">
                        <h3 class="small-sub-head-01">{post.place}</h3>
                                    <h3 class="blog-head-line-01 mt-3 title-color">{post.title}</h3>
                                    <p class="blog-sub-head-para-01"> {post.info ? post.info.substr(0, 240) : null} </p>
                                    <div class="btn-wrap">
                                        <a class="btn btn-md btn-other" href={`/newsdetails/${post.id}`} >Read full artical</a>
                                    </div>
                                    <div class="post-meta clearfix mt-3">
                                        <p class="float-left mb-0"> <i class="fa fa-clock-o "></i> <span>{post.date}</span> <a href="#">{post.author}</a> </p>
                                        {/* <p class="float-right mb-0"> <i class="fa fa-heart-o"></i> <span>112</span> </p>
                                        <p class="float-right mr-4 mb-0"> <i class="fa fa-comments-o"></i> <span class="black-color">52</span>
                                        </p> */}
                                    </div>
                                    <hr class="my-3" />
                                </div>
                            </div>
                        </div>
                        })}
                    </div>
                </div>
                
                <div class="col-sm-3">                    
                    <div class="widget-list-container">
                        <h2 class="widget-title mt-1 mb-3">ಜನಪ್ರಿಯ ಪೋಸ್ಟ್‌ಗಳು</h2>
                        <div class="posts-widget pb-3">
                            <ul class="nav">
                            {newsPosts && newsPosts.map(post => {
                                return <div class="panel post-list">
                                    <div class="panel-body p-t-10">
                                        <div class="media-main">
                                        <a class="pull-left" href={`/newsdetails/${post.id}`}>
                            <img class="thumb-lg  bx-s" src={post.imgSource} alt=""/> </a>
                            <div class="info">
                            <p class="widget-category mb-1">ಇತಿಹಾಸ</p>
                            <a href={`/newsdetails/${post.id}`}> <h6>{post.title}</h6></a>
                            <p class="text-muted"><i class="fa fa-clock-o mr-2"></i>{post.date}</p>
                        </div>
                                        </div>

                                    </div>
                                </div>
                                // <li class="clearfix mb-3">
                                //     <div class="img-widget-wrap">
                                //     <a className="link-tag" href={`/newsdetails/${post.id}`}>
                                //             <img class="img-fluid" src={post.imgSource} alt="" />
                                //         </a>
                                //     </div>

                                //     <div class="widget-info-wrap">
                                //         <p class="widget-category mb-1">ಇತಿಹಾಸ</p>
                                //         <h6 class="widget-head">
                                //         <a className="link-tag" href={`/newsdetails/${post.id}`}>{post.title}</a>
                                //         </h6>
                                //         <p class="date mt-3 mb-1"><i class="fa fa-clock-o mr-2"></i>{post.date}</p>
                                //     </div>
                                // </li>
                                 })}
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
    getNewsPosts
};
const mapStateToProps = state => ({
    newsPosts: state.mainState.newsPosts
});


export default connect(mapStateToProps, mapDispatchToProps) (News);
