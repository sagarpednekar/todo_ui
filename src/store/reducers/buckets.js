import { ADD_BUCKETS } from "../constants/buckets";

const initialState = {
  loading: false,
  loaded: false,
  buckets: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUCKETS:
      return {
        buckets: {
          ...state.buckets,
          data: [
            ...state.buckets.data,
            {
              id: state.buckets.data.length + 1,
              name: action.data.buckets.name
            }
          ]
        }
      };

    default:
      return { ...state };
  }
};
