// dependencies
import { createStore } from "redux";
//  data layer
import middleware from "store/middleware";
import reducer from "store/reducer";

const configureStore = initialState => {
  const store = createStore(reducer, initialState, middleware);
  return store;
};

export default configureStore;
