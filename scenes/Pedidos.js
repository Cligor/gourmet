import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default class Fatura extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text>Listando Pedidos</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
