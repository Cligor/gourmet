import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import firebase from 'firebase';
import Principal from './scenes/Principal';
import Cardapio from './scenes/Cardapio';
import Fatura from './scenes/Fatura';
import Pedidos from './scenes/Pedidos';

export default class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBzIWoKAlwUsh_tY_RMWE01r3JPeT5hqbo',
            authDomain: 'configuracaofirebase-9122b.firebaseapp.com',
            databaseURL: 'https://configuracaofirebase-9122b.firebaseio.com',
            projectId: 'configuracaofirebase-9122b',
            storageBucket: 'configuracaofirebase-9122b.appspot.com',
            messagingSenderId: '860600859517'
        };

        firebase.initializeApp(config);  
    }

    render() {
        return (
            <Router navigationBarStyle={{ backgroundColor: '#2E2752' }} titleStyle={{ color: '#fff' }} navBarButtonColor='#fff' >
                <Stack key='root' >
                    <Scene key='Principal' component={Principal} initial title='Apice Gourmet' />
                    <Scene key='Cardapio' component={Cardapio} title='Cardapio' />
                    <Scene key='Fatura' component={Fatura} title='Fatura' />
                    <Scene key='Pedidos' component={Pedidos} title='Pedidos' />
                </Stack>
            </Router>
        );
    }
}
