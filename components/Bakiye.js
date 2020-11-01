import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Bakiye = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image source={require('../images/wallet.png')} style={styles.wallet} />
                <Text style={styles.walletFont} >Bakiye : </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: 150
    },
    container2: {
        display: "flex",
        backgroundColor: "#CCCCCC",
        width: "80%",
        flexDirection: "row",
        height: 100,
        borderRadius: 10
    },
    wallet: {
        width: 25,
        height: 25,
        marginTop: 4,
        marginLeft: 4
    },
    walletFont: {
        fontSize: 25
    }
  });

export default Bakiye;
