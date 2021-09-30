import React from "react";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../pages/Home";
import AddMiles from "../pages/AddMiles";
import MyAccount from "../pages/MyAccount";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Routes() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="TabsHome"
        
        activeColor="#f4f5e2"
        inactiveColor="#262626"
        
        shifting={true}
        backBehavior={"history"}
        labeled={false}
                
        //barStyle={{ padding: 8 }}
        >
        <Tab.Screen
          name="TabsHome"
          component={Home}
          options={{
            tabBarLabel: "Principal",
            tabBarColor: "#653BBF",
            tabBarBadge: "+99",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="AddMiles"
          component={AddMiles}
          options={{
            tabBarLabel: "Profile",
            tabBarColor: "#F2B84B",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus-box" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="TabsMyAccount"
          component={MyAccount}
          options={{
            tabBarLabel: "Profile",
            tabBarColor: "#653BBF",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
