import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getNewsPosts} from '../../actions/index';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class EventsKannadaPara extends React.Component {
        constructor(props){
            super(props);
            this.state = {
    
            };
        }
        componentDidMount(){
            this.props.getNewsPosts();
        }
        rediectWithParams(id){
            this.props.history.push({pathname: `/newsdetails/${id}`});
        }
      render() {
          let homePagePosts = this.props.homePagePosts;
        //   const newsPosts = posts.splice(0, 4);
  return (
    <div class="container-fluid">
    <div class="row">
    <div class="col-sm-12">
        <div class="head-wrap mt-4">
            <h1 class="head-line-01 text-center"> ಇವೆಂಟ್ಸ್ ಕನ್ನಡ ಪರ </h1>
            <p class="sub-head-para-01 text-center">
                {/* Karnataka on the back of social media campaigns by Pro-Kannada activists who range across the ideological spectrum from the Left to the cultural Right. */}
                ಕನ್ನಡ ಪರ ಕಾರ್ಯಕರ್ತರ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಅಭಿಯಾನ
                </p>
        </div>
    </div>
  {homePagePosts && homePagePosts.map((post, index) => {
       if(index % 2 === 0 ){
        return <div class="col-sm-3 pr-sm-0">
      <a className="link-tag" href={`/newsdetails/${post.id}`}>
          <div class="activist-box-wrap mt-3">
            <div class="img-wrap">
                <img class="img-fluid" src={post.imgSource} alt="" />
                <div class="triangle-up"></div>
            </div>
            <div class="box-info px-4">
                <h3 class="small-sub-head-01 mt-1">{post.place}</h3>
                <h3 class="small-head-01 mt-3 title-color" >{post.title}</h3>

                <p class="box-para mt-3">{post.info ? post.info.substr(0, 240) : null}</p>
                <p class="time-punch mb-0 text-muted">{post.date}</p>
                </div>
            </div>
            </a>
        </div>  
       
       } else { 
       return  <div class="col-sm-3 px-sm-0">
           <a  className="link-tag" href={`/newsdetails/${post.id}`}>
       <div class="activist-box-wrap mt-3">
        <div class="box-info px-4">
                <h3 class="small-sub-head-01 mt-1">{post.place}</h3>
                <h3 class="small-head-01 mt-3 title-color">{post.title}</h3>

                <p class="box-para mt-3">{post.info ? post.info.substr(0, 240) : null}</p>
                <p class="time-punch mb-0 text-muted">{post.date}</p>
           </div>
           <div class="img-wrap">
           <img class="img-fluid" src={post.imgSource} alt="" />
               <div class="triangle-down"></div>
           </div>
         </div>
         </a>
        </div>
       }
    })}
    {/* <div class="col-sm-12">
        <button type="button" class="btn btn-md btn-other mx-auto d-block mt-4">Load more</button>
    </div> */}
</div>
</div>
   );
  }
}

const mapDispatchToProps = {
    getNewsPosts
};
const mapStateToProps = state => ({
    homePagePosts: state.mainState.homePagePosts
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps) (EventsKannadaPara));
