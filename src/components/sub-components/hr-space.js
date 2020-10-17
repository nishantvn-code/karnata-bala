import React from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../actions/index';

const HrSpace  = props => {
  return (
    <div class="row">
    <div class="col-sm-12">
        <div class="border-box mt-4 mb-4"></div>
    </div>
</div>
  );
  }

const mapDispatchToProps = {
  logIn
};
const mapStateToProps = state => ({

});


export default connect(mapStateToProps, mapDispatchToProps) (HrSpace);
