import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { injectClient } from "./middlewares";

export const configureStore = (client, preloadedState, reducers) => {
  const store = compose(applyMiddleware(injectClient(client), thunk))(
    createStore
  );
  return store(reducers, preloadedState);
};
