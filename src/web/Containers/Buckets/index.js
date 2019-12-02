import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addBuckets } from "../../../store";
const Buckets = () => <div>
    
</div>;

const mapStateToProps = state => {
  return { buckets: state.buckets };
};

const mapDispatchToProps = dispatch => {
  return { addBuckets: payload => dispatch(addBuckets(payload)) };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Buckets)
);
