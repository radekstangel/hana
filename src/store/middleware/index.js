// dependencies
import { applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
// app data layer
// import localStorageMiddleware from 'store/middleware/localStorageMiddleware';
// import storageDefinitions from 'store/middleware/localStorageMiddleware/storageDefinitions';

const isProd = process.env.NODE_ENV === "production";
const middlewareList = [];
// let devTool = f => f;

middlewareList.push(thunk);

if (!isProd) {
  middlewareList.push(createLogger());
}

const middleware = compose(applyMiddleware(...middlewareList));

export default middleware;
