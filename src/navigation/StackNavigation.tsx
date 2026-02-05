import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import LogInScreen from '../screens/LogInScreen';
import TabNavigation from './TabNavigation';
import { RootStackParamList } from '../types/NavigationTypes';

const StackNavigation = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="LogIn" component={LogInScreen} />
            <Stack.Screen name="Tab" component={TabNavigation} />
        </Stack.Navigator>
    )
}

export default StackNavigation