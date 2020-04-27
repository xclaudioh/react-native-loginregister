import React, { useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RegisterForm from "../../components/Account/RegisterForm";
import Toast from "react-native-easy-toast";

export default function Register() {
    const toastRef = useRef();

    return (
        <KeyboardAwareScrollView>
            <View style={styles.viewForm}>
                <RegisterForm toastRef={toastRef} />
            </View>
            <Toast ref={toastRef} position="center" opacity={0.5} />
        </KeyboardAwareScrollView>
    )
};

const styles = StyleSheet.create({
    viewForm: {
        marginHorizontal: 40
    }
})