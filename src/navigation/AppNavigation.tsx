import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import LeadScreen from "../screens/LeadScreen";

const Stack = createStackNavigator();
const packageJson = require('../../package.json')
const version = packageJson.version
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={
          {title : "sdk-leads v"+version}
        } />
        <Stack.Screen name="Detail" component={DetailScreen} options={({route}) => ({
          title : route.params.event.title,
        })} />
        <Stack.Screen name="Lead" component={LeadScreen} options={
          {title : "Form"}
        } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
