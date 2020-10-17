import React from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../actions/index';
class Blog extends React.Component {

  render() {
  return (
    <div className="App">
     <h1>Gallery - Karnata Bala</h1>
    </div>
  );
  }
}

const mapDispatchToProps = {
  logIn
};
const mapStateToProps = state => ({

});


export default connect(mapStateToProps, mapDispatchToProps) (Blog);
