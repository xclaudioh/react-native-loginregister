import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Icon } from "react-native-elements";

import AccountScreenStacks from "./AccountStacks";

const NavigationStacks = createBottomTabNavigator({
    Account: {
        screen: AccountScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Cuenta",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type="material-community"
                    name="home-outline"
                    size={22}
                    color={tintColor}
                />
                )
            })
        }
    },
    {
        initialRouteName: "Account",
        order: ["Account"],
        tabBarOptions: {
            inactiveTintColor: "#646464",
            activeTintColor: "#00a680"
      }
    }
  );
  

export default createAppContainer(NavigationStacks);