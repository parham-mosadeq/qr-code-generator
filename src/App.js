import React from 'react';
import Settings from './components/Settings';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Settings />
      </div>
    </Provider>
  );
};

export default App;
