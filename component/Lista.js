import React, { Component } from 'react';
import { ScrollView, View, Button } from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = { listaItens: [] };
    }

    componentWillMount() {
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
        .then((response) => { this.setState({ listaItens: response.data }); })
        .catch(() => { console.log('erro ao recuperar os dados'); });
    }
    
    render() {
        return (
            <View>
                <Button title='Fazer Pedido' onPress={() => { Itens.pedir(); }} />

                <ScrollView >
                    { this.state.listaItens.map((item) => (<Itens key={item.titulo} item={item} />)) }
                </ScrollView>
            </View>
        );
    }
}
