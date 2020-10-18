import React from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../actions/index';
class News extends React.Component {

  render() {
  return (
    <div className="container-fluid">
    <div class="row">
            <div class="col-sm-12">
                <div class="head-wrap">
                    <h1 class="head-line-01">Karnataka Wild</h1>
                </div>
            </div>
            <div class="col-sm-12">
                <img class="img-fluid w-100" src="image/carousel-yaana.jpg" />
                <p>The govenment in the southern Indian state of Karnataka recently set up a panel to explore if the state can have its own separate flag. The BBC explains why it has</p>
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
