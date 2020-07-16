import React from 'react';
import MainApp from './src/app'
import { store, persistor } from './src/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <Provider store={ store }>
      <PersistGate persistor={ persistor }>
        <MainApp />
      </PersistGate>  
    </Provider>
  );
};
export default App;
