import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TabNavigation from '../navigation/TabNavigation'
import StackNavigation from '../navigation/StackNavigation'
import { useSelector, useDispatch } from 'react-redux'
import { loginSuccess } from '../redux/AuthSlice'
import AppNavigation from '../navigation/AppNavigation'

const AppContent = () => {
  const [login, setLogin] = useState(false);
  const { isLogin } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch()

  useEffect(() => {
    AsyncStorage.getItem('isLogin').then((value) => {
      if (value === "true") {
        setLogin(true)
        dispatch(loginSuccess(true))
      }
    })
  }, [dispatch])

  useEffect(() => {
    setLogin(isLogin)
  }, [isLogin])

  return (
    <NavigationContainer>
      {login || isLogin ? <AppNavigation /> : <StackNavigation />}
    </NavigationContainer>
  )
}

export default AppContent
