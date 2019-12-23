import { createStore } from 'redux';

import rootReucer from './modules/rootReducer';

const store = createStore(rootReucer);

export default store;
