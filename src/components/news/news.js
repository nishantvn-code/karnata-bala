import React from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../actions/index';
class News extends React.Component {

  render() {
  return (
    <div className="App">
     <h1>News - Karnata Bala</h1>
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
