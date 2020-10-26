
import React from "react";
import { connect } from "react-redux";
import {getNewsPosts, getNewsPostsById} from '../../actions/index';

 class NewsDetails extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                id: ''
            };
        }
        componentWillMount(){
            this.props.getNewsPosts();
            //const id = Number(this.props.match.params.id) || '';
            const {match: {params}} = this.props; // could be '?foo=bar'
            const id = Number(params.id); // bar
            this.props.getNewsPostsById(id);
        }
        componentDidMount(){
          
        }
        rediectWithParams(id){
            this.props.history.push({pathname: `/newsdetails/${id}`});
        }
        render() {

  return (
    <div class="container-fluid">
         <div class="row">
        {this.props.selectedPost && this.props.selectedPost.length ? this.props.selectedPost.map(post => { 
        return (<div>
            <div class="jumbotron-blog-img mb-4">
              <img class="img-fluid" src={`/${post.imgSource}`} alt="img" />
          </div> 
          <div class="row">
        <div class="col-sm-3">
            <p class="mb-0">Author</p>
            <h3 class="widget-head my-0"> {post.author}</h3>
            <p class="date my-1"><i class="fa fa-clock-o mr-2"></i>{post.date}</p>
        </div>
        <div class="col-sm-6">
            <div class="story-container">
                <h1 class="head-line-01 title-color mb-3"> {post.title}</h1>
                <p class="story-paragraph">
                {post.description}
                </p>
                
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
                
                {/* <div class="pager-wrapper py-3">
                    <ul class="nav pager-nav">
                        <li><a href="#"><i class="fa fa-long-arrow-left"></i>Older Posts</a></li>
                        <li><a href="#">Newer Posts<i class="fa fa-long-arrow-right"></i></a></li>
                    </ul>
                </div> */}
            </div>
        </div>
        <div class="col-sm-3">                    
                    <div class="widget-list-container">
                        <h2 class="widget-title mt-1 mb-3">ಜನಪ್ರಿಯ ಪೋಸ್ಟ್‌ಗಳು</h2>
                        <div class="posts-widget pb-3">
                            <ul class="nav">
                            {this.props.homePagePosts && this.props.homePagePosts.map(post => {
                                return <li class="clearfix mb-3">
                                   
                                        <div class="img-widget-wrap">
                                        <a className="link-tag" href={`/newsdetails/${post.id}`}>
                                            <img class="img-fluid" src={`/${post.imgSource}`} alt="" />
                                        </a>
                                    </div>

                                    <div class="widget-info-wrap">
                                        <p class="widget-category mb-1">ಇತಿಹಾಸ</p>
                                        <h3 class="widget-head">
                                        <a className="link-tag" href={`/newsdetails/${post.id}`}>{post.title}</a>
                                        </h3>
                                        <p class="date mt-3 mb-1"><i class="fa fa-clock-o mr-2"></i>{post.date}</p>
                                    </div>
                                </li>
                              
                                 })}
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        )}): null}
  
       
    </div>
    </div>
  );
}
}

const mapDispatchToProps = {
    getNewsPosts,
    getNewsPostsById
};
const mapStateToProps = (state) => ({
    newsPosts: state.mainState.newsPosts,
    selectedPost: state.mainState.selectedPost,
    homePagePosts:  state.mainState.homePagePosts
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetails);
