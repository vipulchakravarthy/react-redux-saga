import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchData } from './redux/actions';

class App extends Component {


  handleFetchData = () => {
    console.log("fetch called")
    this.props.fetchData(2)
  }

  render() {

    return (
      <div>
        <button onClick={this.handleFetchData}
          className="btn btn-primary">Fetch</button>
        <div>
          {/* {this.props.user} */}
          {Object.keys(this.props.user).length > 0 && <div>{this.props.user}</div>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.fetchDataReducer.user,
    error: state.fetchDataReducer.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (id) => {
      dispatch(fetchData(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

