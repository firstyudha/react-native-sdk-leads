// @ts-nocheck
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import LeadScreen from "../screens/LeadScreen";
import { Provider } from 'react-redux'
import { store } from "../redux/store"

const Stack = createStackNavigator();
const version = '0.2.3'
const AppNavigation = () => {
  return (
    <Provider store={store} >
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
    </Provider>
  );
};

export default AppNavigation;
