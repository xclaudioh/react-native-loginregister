import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-elements";

export default function InfoUser(props) {
    const { userInfo } = props;
    console.log(userInfo);
    
    return (
        <View>
            <Text>Info user</Text>
        </View>
    )
};