import {
  GET_ALL_BUCKETS,
  ADD_NEW_BUCKET,
  UPDATE_BUCKET,
  DELETE_BUCKET
} from "../constants";

const intialState = {
  buckets: {},
  loading: false,
  loaded: false
};

export default (state = intialState, action) => {
  switch (action.type) {
    case `${GET_ALL_BUCKETS}_REQUEST`:
      return {
        ...state,
        loading: true
      };

    case GET_ALL_BUCKETS:
      return {
        ...state,
        loading: false,
        loaded: true,
        buckets:
          action.payload && action.payload.data ? action.payload.data : []
      };

    case `${GET_ALL_BUCKETS}_FAILURE`:
      return {
        ...state,
        loaded: false
      };

    case `${ADD_NEW_BUCKET}_REQUEST`:
      return {
        ...state,
        loading: true
      };

    case ADD_NEW_BUCKET:
      return {
        ...state,
        loading: false,
        loaded: true,
        buckets:
          action.payload && action.payload.data
            ? [...state.buckets, action.payload.data]
            : []
      };

    case `${ADD_NEW_BUCKET}_FAILURE`:
      return {
        ...state,
        loaded: false
      };

    case `${UPDATE_BUCKET}_REQUEST`:
      return {
        ...state,
        loading: true
      };

    case UPDATE_BUCKET:
      let bucket = state.buckets;
      if (action.data && action.data.id) {
        [bucket] = bucket.splice(
          state.buckets.findIndex(bucket => bucket.id === action.data.id),
          1
        );
        bucket = [...state.buckets, { ...bucket, ...action.data.bucket }].sort(
          (a, b) => a.id - b.id
        );
      }

      return {
        ...state,
        loading: false,
        loaded: true,
        buckets: action.data && action.data.bucket ? bucket : []
      };

    case `${UPDATE_BUCKET}_FAILURE`:
      return {
        ...state,
        loaded: false
      };

    case `${DELETE_BUCKET}_REQUEST`:
      return {
        ...state,
        loading: true
      };

    case DELETE_BUCKET:
      let filterBucket;
      if (action.data && action.data.id) {
        filterBucket = state.buckets.filter(
          bucket => bucket.id !== action.data.id
        );
      }
      return {
        ...state,
        loading: false,
        loaded: true,
        buckets: action.data && action.data.id ? filterBucket : []
      };

    case `${DELETE_BUCKET}_FAILURE`:
      return {
        ...state,
        loaded: false
      };

    default:
      return { ...state };
  }
};
