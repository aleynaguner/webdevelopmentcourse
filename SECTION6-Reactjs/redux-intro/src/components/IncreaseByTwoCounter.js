import React, { Component } from "react";
import { increaseByTwoCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.dispatch(increaseByTwoCounter());
          }}
        >
          +2
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseByTwoCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);
