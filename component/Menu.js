import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'; 


import { Actions } from 'react-native-router-flux';


import home from '../imgs/home.png';
import food from '../imgs/fast-food.png';
import choices from '../imgs/choices.png';
import money from '../imgs/money.png';


export default class Menu extends Component {
    render() {
        return (
            <View style={menu.menu}>
                <TouchableOpacity onPress={() => { Actions.Principal(); }}>
                    <View style={menu.botao}>
                        <Image source={home} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { Actions.Cardapio(); }}>
                    <View style={menu.botao}>
                        <Image source={food} style={{ height: 32, width: 32 }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { Actions.Pedidos(); }}>
                    <View style={menu.botao}>
                        <Image source={choices} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { Actions.Faturamento(); }}>
                    <View style={menu.botao}>
                        <Image source={money} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const menu = StyleSheet.create({
    menu: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor: '#DCC97B',
        backgroundColor: '#e5e6e8',
        flex: 1,
    },

    botao: {
        margin: 5,
    }
});
