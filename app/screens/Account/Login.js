import React, { useRef } from "react";
import { StyleSheet, View, ScrollView, Text, Imagen } from "react-native";
import { Divider } from "react-native-elements";
import { withNavigation } from "react-navigation";
import LoginForm from "../../components/Account/LoginForm";
import Toast from "react-native-easy-toast";

export default function Login(props) {
    const { navigation } = props;
    const toastRef = useRef();

    return (
        <ScrollView>
            <View style={styles.viewContainer}>
                <LoginForm toastRef={toastRef} />
                <CrearCuenta navigation={navigation} />
            </View>
            <Divider style={styles.divider} />
            <View style={styles.viewContainer}>
                <Text>Login FB</Text>
            </View>
            <Toast ref={toastRef} position="center" opacity={0.5} />
        </ScrollView>
    )
};

function CrearCuenta(props) {
    const { navigation } = props;

    return (
        <Text style={styles.textoRegistrar}>
            ¿No tienes una cuenta?{" "}
            <Text style={styles.botonRegistrar} onPress={() => navigation.navigate('Register')} >Regístrate</Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        marginHorizontal: 40,
        marginVertical: 100
    },
    textoRegistrar: {
        marginTop: 15,
        marginRight: 10,
        marginLeft: 10
    },
    botonRegistrar: {
        color: "#00a680",
        fontWeight: "bold"
    }
});