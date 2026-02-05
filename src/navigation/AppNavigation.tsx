import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/NavigationTypes";
import TabNavigation from "./TabNavigation";
import CartDetailScreen from "../screens/CartDetailScreen";

const AppNavigation = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tab" component={TabNavigation} />
            <Stack.Screen name="CartDetail" component={CartDetailScreen} />
        </Stack.Navigator>
    )
}

export default AppNavigation;