import { createStore } from 'redux';

import rootReucer from './modules/rootReducer';

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootReucer, enhancer);

export default store;
