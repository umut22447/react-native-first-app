import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import PrizeListItem from './PrizeListItem';

const prizeList = [
    {name: "BRONZE", disable: false, adCount: 10},
    {name: "SILVER", disable: false, adCount: 15},
    {name: "GOLD", disable: true, adCount: 20},
    {name: "DIAMOND", disable: true, adCount: 25}
]

const PrizeList = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                {prizeList.map(p => {
                    return <PrizeListItem name={p.name} disable={p.disable} adCount={p.adCount} style={styles.listItem} />
                })}
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
      height: 550
    },
    container2: {
        display: "flex",
        backgroundColor: "#CCCCCC",
        width: "80%",
        flexDirection: "column",
        height: 530,
        borderRadius: 10
    },
    listItem: {
        marginTop: 10,
        backgroundColor: "#66FFCC",
        borderRadius: 20,
        height: 120
    }
  });

export default PrizeList;