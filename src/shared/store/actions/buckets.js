import {
  ADD_NEW_BUCKET,
  GET_ALL_BUCKETS,
  UPDATE_BUCKET,
  DELETE_BUCKET
} from "../constants";
import { config } from "../../../environment";
export const getAllBuckets = () => {
  return {
    type: GET_ALL_BUCKETS,
    promise: client => client.get(`${config.BASE_URL}/buckets?tasks=true`)
  };
};

export const addNewBucket = payload => {
  return {
    type: ADD_NEW_BUCKET,
    data: payload,
    promise: client => client.post(`${config.BASE_URL}/bucket/new`, payload)
  };
};

export const updateBucket = (id, payload) => {
  return {
    type: UPDATE_BUCKET,
    data: { id, ...payload },
    promise: client => client.put(`${config.BASE_URL}/bucket/${id}`, payload)
  };
};

export const deleteBucket = id => {
  return {
    type: DELETE_BUCKET,
    data: { id },
    promise: client => client.delete(`${config.BASE_URL}/bucket/${id}`)
  };
};
