import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

export default function LoginForm() {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <View style={styles.formContainer}>
            <Input 
                placeholder="Correo Electrónico"
                containerStyle={styles.inputForm}
                rightIcon={
                    <Icon
                        type="material-community"
                        name= "at"
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Input 
                placeholder="Contraseña" 
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={hidePassword}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={ hidePassword ? "eye-outline" : "eye-off-outline-"}
                        iconStyle={styles.iconRight}
                        onPress={() => setHidePassword(!hidePassword)}
                    />
                }
            />
            <Button title="Ingresar" />
        </View>
    )
};

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    inputForm: {
        width: "100%",
        marginTop: 20
    },
    iconRight: {
        color: "#c1c1c1"
    }
});