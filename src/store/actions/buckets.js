import { ADD_BUCKETS } from "../constants/buckets";

export const addBuckets = payload => {
  return {
    type: ADD_BUCKETS,
    promise: []
  };
};
