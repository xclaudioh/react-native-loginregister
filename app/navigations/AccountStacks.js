import { createStackNavigator } from "react-navigation-stack";
import MyAccountScreen from "../screens/Account/MyAccount";

const AccountScreenStacks = createStackNavigator({
    MyAccount: {
        screen: MyAccountScreen,
        navigationOptions: () => ({
            title: "MyAccount"
        })
    }
});

export default AccountScreenStacks;