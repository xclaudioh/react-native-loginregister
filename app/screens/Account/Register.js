import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Register() {
    return (
        <KeyboardAwareScrollView>
            <View style={styles.viewForm}>
                <Text>asd</Text>
            </View>
        </KeyboardAwareScrollView>
    )
};

const styles = StyleSheet.create({
    viewForm: {
        marginHorizontal: 40
    }
})