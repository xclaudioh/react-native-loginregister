import React from "react";
import { StyleSheet, View, ScrollView, Text, Imagen } from "react-native";
import { Divider } from "react-native-elements";
import { withNavigation } from "react-navigation";

export default function Login(props) {
    const { navigation } = props;

    return (
        <ScrollView>
            <View style={styles.viewContainer}>
                <Text>Form Login</Text>
                <CrearCuenta navigation={navigation} />
            </View>
            <Divider style={styles.divider} />
            <View style={styles.viewContainer}>
                <Text>Login FB</Text>
            </View>
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