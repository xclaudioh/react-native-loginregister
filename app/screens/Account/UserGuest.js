import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { withNavigation } from "react-navigation";

function UserGuest(props) {
    const { navigation } = props;

    return (
        <ScrollView style={styles.viewBody} centerContent={true}>
            <Text style={styles.title}>asd</Text>
            <View style={styles.viewBtn}>
                <Button 
                    buttonStyle={styles.boton} 
                    containerStyle={styles.botonContainer} 
                    title="Iniciar Sesión" 
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </ScrollView>
    )
};

export default withNavigation(UserGuest);

const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 30,
        marginRight: 30
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
        textAlign: "center"
    },
    viewBtn: {
        flex: 1,
        alignItems: "center"
    },
    boton: {
        backgroundColor: "#00a680"
    },
    botonContainer: {
        width: "70%"
    }
})