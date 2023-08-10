import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import HomeStack from "./homeStack";

const Tab = createBottomTabNavigator();

 const BottomNavigation=()=>{
    return(
          
            <Tab.Navigator>
                <Tab.Screen name="HomeS" component={HomeStack} options={{headerShown:false}}/>
                <Tab.Screen name="Profile" component={Profile}/>
                <Tab.Screen name="Setting" component={Settings}/>
            </Tab.Navigator>
          
    )
}
export default BottomNavigation