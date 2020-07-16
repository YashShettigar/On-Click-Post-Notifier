import React from 'react'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import reducers from './reducers'

const notifyConfig = {
    key: 'notify',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(notifyConfig, reducers)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)


// export const changeNotificationState = (status) => {
//     return {
//         type: 'NOTIFY',
//         status
//     }
// }