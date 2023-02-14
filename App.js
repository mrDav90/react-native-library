import React , { useEffect } from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './src/navigations/Navigation';
import { store } from './src/reducers/store';
import { UtilsProvider } from './src/utils';

export default function App() {  
  return (
    <Provider store={store} >
      <UtilsProvider>
        <Navigation />
      </UtilsProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

