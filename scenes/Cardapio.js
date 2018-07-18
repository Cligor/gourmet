import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import firebase from 'firebase';

import Lista from '../component/Lista';
import Menu from '../component/Menu';

export default class Cardapio extends Component {

    render() {
        return (
            <View style={cardapio.principal}>
                <View style={cardapio.conteudo}>
                    <Lista />
                </View>

                <View style={cardapio.menu}>
                    <Menu />
                </View>
            </View>
        );
    }
} 

const cardapio = StyleSheet.create({
    conteudo: {
      //flex: 11,
      height: '91%',
    },
  
    principal: {
      backgroundColor: 'white',
      //flex: 1,
      height: '100%',
      justifyContent: 'center',
    },
  
    menu: {
      //flex: 1,
      height: '9%',
    }
});
