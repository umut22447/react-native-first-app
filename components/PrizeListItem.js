import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const PrizeListItem = (props) => {
    var medalImage = require('../images/bronze-medal.png');
    switch (props.name) {
        case 'BRONZE':
            medalImage = require('../images/bronze-medal.png');
            break;
        case 'SILVER':
            medalImage = require('../images/silver-medal.png');
            break;
        case 'GOLD':
            medalImage = require('../images/gold-medal.png');
            break;
        case 'DIAMOND':
            medalImage = require('../images/diamond-medal.png');
            break;
        default:
            medalImage = require('../images/bronze-medal.png');
            break;
    }
    return (
        <TouchableOpacity style={props.style} disabled={props.disable} >
            <View style={styles.listTitle}>
                <Image style={styles.medalImage} source={medalImage} />
                <Text>
                    THIS IS {props.name}
                </Text>
                <Text>Bu aşamada {props.adCount} adet reklam izleyebilirsiniz.</Text>
            </View>
            {props.disable ? <Text>(Bu aşamayı henüz açamadınız.)</Text> : null}
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    medalImage: {
        width: 60,
        height: 60
    }
    , listTitle: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    }
});

export default PrizeListItem;