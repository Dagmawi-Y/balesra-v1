import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

 const BottomNavigation=()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Profile" component={Profile}/>
                <Tab.Screen name="Setting" component={Settings}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default BottomNavigation