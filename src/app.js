import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { connect } from 'react-redux'
import { toggleNotification } from './reducers'
import { changeNotificationStatus } from './backend'
import messaging from '@react-native-firebase/messaging'

async function registerAppWithFCM() {
  await messaging().registerDeviceForRemoteMessages();
}

const MainApp = (props) => {

  return (
      <View style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button 
          mode="contained"
          color={
            props.notification ?
            "#37474f" : "#fff"
          }
          style={
            [props.notification ? styles.notifyEnBtn : styles.notifyDsBtn,
            { width:270, height:50, borderRadius:25, justifyContent:'center' }]
          }
          onPress={() => props.dispatch(toggleNotification()) & changeNotificationStatus() & registerAppWithFCM()}
        >
          {
            props.notification ? "Enable Notifications" : "Disable Notifications"
          }
        </Button>
      </View>
  )
}

export default connect(({ notification }) => (
  {
    notification
  }
))(MainApp)

const styles = StyleSheet.create({
  notifyEnBtn: {
    backgroundColor: '#ffca28'
  },
  notifyDsBtn: {
    backgroundColor: '#dc143c'
  }
})