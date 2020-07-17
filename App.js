import React, { useEffect } from 'react';
import MainApp from './src/app'
import { store, persistor } from './src/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging'

const App = () => {

  useEffect(() => {
    messaging().subscribeToTopic('anime')
    PushNotification.configure({
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification)
      }
    })
  })

  return (
    <Provider store={ store }>
      <PersistGate persistor={ persistor }>
        <MainApp />
      </PersistGate>  
    </Provider>
  );
};
export default App;
