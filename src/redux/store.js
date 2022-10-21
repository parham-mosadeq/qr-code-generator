import { createStore } from 'redux';
import root from './rootReducer';
const store = createStore(root);

export default store;
