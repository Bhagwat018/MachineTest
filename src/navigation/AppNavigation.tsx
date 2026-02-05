import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/NavigationTypes";
import TabNavigation from "./TabNavigation";

const AppNavigation = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Tab" component={TabNavigation} />
            {/* Add more screens here if needed  like details card*/}
        </Stack.Navigator>
    )
}

export default AppNavigation;