import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import { HomeIcon, PlusIcon } from '../components/Icons'
import CardScreen from '../screens/CardScreen'
import { TabParamList } from '../types/NavigationTypes'

const TabNavigation = () => {
    const Tabs = createBottomTabNavigator<TabParamList>()
    return (
        <Tabs.Navigator screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <HomeIcon color={color} /> }} />
            <Tabs.Screen name="Cart" component={CardScreen} options={{ tabBarIcon: ({ color }) => <PlusIcon color={color} /> }} />
        </Tabs.Navigator>
    )
}

export default TabNavigation