import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import { Header } from './components/common';
import TricksList from './components/tricksList';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <Header headerText="BMX tricks list"/>
                <TricksList />
            </View>
        </Provider>
    );
}

export default App;