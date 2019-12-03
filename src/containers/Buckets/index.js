import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getAllBuckets,
  addNewBucket,
  updateBucket,
  deleteBucket
} from "../../shared/store/actions/buckets";
import ListBuckets from "../../web/Components/Buckets/ListBuckets";
import Loader from "../../web/Components/Loader";

const BucketsWrapper = props => {
  useEffect(() => {
    props.getAllBuckets();
  }, []);
  return (
    <div>
      {props.buckets.loaded && !props.buckets.loading ? (
        <ListBuckets
          buckets={props.buckets.buckets}
          addNewBucket={props.addNewBucket}
          updateBucket={props.updateBucket}
          deleteBucket={props.deleteBucket}
        />
      ) : (
        <Loader />
      )}

      {console.log(props)}
    </div>
  );
};

const mapStateToProps = state => {
  return { buckets: state.buckets };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllBuckets: () => dispatch(getAllBuckets()),
    addNewBucket: payload => dispatch(addNewBucket(payload)),
    updateBucket: (id, payload) => dispatch(updateBucket(id, payload)),
    deleteBucket: id => dispatch(deleteBucket(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BucketsWrapper);
