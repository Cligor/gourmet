import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import firebase from 'firebase';

var selecionados = [];

function toObject(arr) {
    var rv = {};
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== undefined) {
            rv[i] = arr[i];
        }
    }
    return rv;
}

export default class Itens extends Component {

    static pedir() {
        const pedido = firebase.database().ref('pedidos');
        let obj = {};
        obj = toObject(selecionados);
        pedido.push().set(obj);

        alert('Pedido realizado.');
    }

    constructor(props) {
        super(props);
        this.state = { background: '#fff'}
    }

    selecionar() {
        if (this.state.background == '#fff') {
            this.setState({
                background: '#e8df45'
            });
            selecionados[selecionados.length] = [this.props.item.foto, this.props.item.titulo, this.props.item.valor];
        } else {
            this.setState({
                background: '#fff'
            });
        }
    }

	render() {
		return (
            
            <TouchableWithoutFeedback onPress={() => { this.selecionar(); }}>
			<View style={{
                    backgroundColor: this.state.background,
                    margin: 10,
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    padding: 10,
                    flexDirection: 'row',
                    height: 120,
                }}>
                <View style={style.foto}>
                    <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto }} />
                </View>
                <View style={style.detalhesItem}>
                    <Text style={style.titulo}>{this.props.item.titulo}</Text>
                    
                    <Text style={style.valor}>{this.props.item.valor}</Text>
                </View>
			</View>
            </TouchableWithoutFeedback>
		);
	}
}

const style = StyleSheet.create({

	foto: {
		width: 102,
		height: 102,
	},

	detalhesItem: {
		marginLeft: 20,
		flex: 1,
	},

	titulo: {
		fontSize: 18,
		color: 'blue',
		marginBottom: 5,
	},

	valor: {
		fontSize: 16,
		fontWeight: 'bold',
	},
});
