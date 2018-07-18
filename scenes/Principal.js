import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Menu from '../component/Menu';

import logo from '../imgs/logo.jpg';

export default class App extends Component {
  render() {
    return (
      
        <View style={principal.principal} >

          <View style={principal.logo}>
            <Image source={logo} />
          </View>

          <View style={principal.menu}>
            <Menu />
          </View>
            
        </View>
    );
  }
}

const principal = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
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
