/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
//project-703492750768
//project-182594267282

import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import AppContent from './src/components/AppContent'
import '@react-native-firebase/app'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "182594267282-12g8phc1qv9jjlp82de42594nl4t7dit.apps.googleusercontent.com",
    })
  }, [])

  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App

