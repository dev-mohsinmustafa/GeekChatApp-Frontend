import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform, Image } from 'react-native';
import Header from '../../components/header/Header';

const EmergencyScreen = () => {
    const emergencyNumbers = {
        police: '15', // Replace this with the emergency number for your region
        ambulance: '1122', // Replace this with the emergency number for your region
    };

    const handleEmergencyCall = (phoneNumber) => {
        const phoneNumberWithProtocol = Platform.OS === 'ios' ? `telprompt:${phoneNumber}` : `tel:${phoneNumber}`;
        Linking.openURL(phoneNumberWithProtocol);
    };

    return (
        <View style={styles.mainContainer}>
            <View style={{ flex: 0.2 }}>
                <Header title="Emergency Call" image1={require("../../assets/images/arrow-left.png")}
                    image2={require("../../assets/images/bible.png")}
                />
            </View>
            <View style={{ flex: 0.1 }}>
                <Image source={require("../../assets/images/girlcycle.png")} />
            </View>

            <View style={styles.container}>
                <Text style={styles.header}>Emergency Services</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleEmergencyCall(emergencyNumbers.police)}
                >
                    <Text style={styles.buttonText}>Call Police</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleEmergencyCall(emergencyNumbers.ambulance)}
                >
                    <Text style={styles.buttonText}>Call Ambulance</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, backgroundColor: "#FFECD0",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        color: "#FF3974",
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default EmergencyScreen;
