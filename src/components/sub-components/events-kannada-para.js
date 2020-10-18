import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getNewsPosts} from '../../actions/index';
import { Link } from 'react-router-dom';
const EventsKannadaPara  = props => {
    useEffect(() => {
        props.getNewsPosts();
    }, [])
  return (
    <div class="row">
    <div class="col-sm-12">
        <div class="head-wrap mt-4">
            <h1 class="head-line-01 text-center"> ಇವೆಂಟ್ಸ್ ಕನ್ನಡ ಪರ </h1>
            <p class="sub-head-para-01 text-center">Karnataka on the back of social media campaigns by Pro-Kannada activists who range across the ideological spectrum from the Left to the cultural Right.</p>
        </div>
    </div>
  {props.newsPosts && props.newsPosts.map((post, index) => {
       if(index % 2 === 0 ){
        return <div class="col-sm-3 pr-sm-0">
        <div class="activist-box-wrap mt-3">
            <div class="img-wrap">
                <img class="img-fluid" src={post.imgSource} alt="" />
                <div class="triangle-up"></div>
            </div>
            <div class="box-info px-4">
                <h3 class="small-sub-head-01 mt-1">{post.place}</h3>
                <h3 class="small-head-01 mt-3">{post.title}</h3>

                <p class="box-para mt-3">{post.description}</p>
                <p class="time-punch mb-0 text-muted">{post.date}</p>
                </div>
            </div>
        </div>
       } else { 
       return  <div class="col-sm-3 px-sm-0">
       <div class="activist-box-wrap mt-3">
        <div class="box-info px-4">
                <h3 class="small-sub-head-01 mt-1">{post.place}</h3>
                <h3 class="small-head-01 mt-3">{post.title}</h3>

                <p class="box-para mt-3">{post.description}</p>
                <p class="time-punch mb-0 text-muted">{post.date}</p>
           </div>
           <div class="img-wrap">
           <img class="img-fluid" src={post.imgSource} alt="" />
               <div class="triangle-down"></div>
           </div>
         </div>
        </div>
       }
    })}
    <div class="col-sm-12">
        <button type="button" class="btn btn-md btn-other mx-auto d-block mt-4">Load more</button>
    </div>
</div>
   );
  }

const mapDispatchToProps = {
    getNewsPosts
};
const mapStateToProps = state => ({
    newsPosts: state.mainState.newsPosts
});


export default connect(mapStateToProps, mapDispatchToProps) (EventsKannadaPara);
