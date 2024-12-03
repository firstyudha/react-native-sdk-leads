// @ts-nocheck
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import LeadScreen from "../screens/LeadScreen";
import PaymentScreen from "../screens/PaymentScreen";
import LeadPayScreen from "../screens/LeadPayScreen";
import { Provider } from 'react-redux'
import { store } from "../redux/store"

const Stack = createStackNavigator();
const version = '1.1.0'
const AppNavigation = () => {
  return (
    <Provider store={store} >
      {/* <NavigationContainer> */}
        <Stack.Navigator initialRouteName="SDK">
          <Stack.Screen name="SDK" component={HomeScreen} options={
            {title : "sdk-leads v"+version}
          } />
          <Stack.Screen name="Detail" component={DetailScreen} options={({route}) => (
            {title : ""}
          )} />
          <Stack.Screen name="Lead" component={LeadScreen} options={
            {title : ""}
          } />
          <Stack.Screen name="LeadPay" component={LeadPayScreen} options={
            {title : ""}
          } />
          <Stack.Screen name="Payment" component={PaymentScreen} options={
            {title : ""}
          } />
        </Stack.Navigator>
      {/* </NavigationContainer> */}
    </Provider>
  );
};

export default AppNavigation;
