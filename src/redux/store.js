import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore(rootReducer);

export default store;

// Using vanilla redux--------------------------------------------------------

// import { createStore } from 'redux';
// import rootReducer from './rootReducer';

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ 
//     && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;

// ---------------------------------------------------------------------------