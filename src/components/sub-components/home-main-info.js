import React from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../actions/index';

const HomeMainInfo  = props => {
  return (
    <div class="jumbotron k-jumbotron">            
    <div class="row justify-content-end">
        <div class="col-sm-7">
            <h3>Happy Kannada Rajyostava - 2020</h3>
            <h1 class="pt-2">Welcome to KarnataBala</h1>            
            <p class="mb-0">The mission of KarnataBala is to work for the cause of language rights of Kannada consumers. The plight of a Kannada consumer in Karnataka today shows how the government and private sectors have conveniently ignored the language dimension in consumer services. </p>
        </div>
    </div>
    
    <img src="image/Utsava_background.png" class="img-fluid rajyostava d-none d-md-block" />
</div>
  );
  }

const mapDispatchToProps = {
  logIn
};
const mapStateToProps = state => ({

});


export default connect(mapStateToProps, mapDispatchToProps) (HomeMainInfo);
