import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { AppProvider, TabBar } from './components';
import Settings from './src/test_components/Settings';
import Home from './src/test_components/Home';
import { Provider } from 'react-redux';
import { store } from './src/reducers/store';
import {useSelector} from "react-redux"

export default function App() {
  const theme = useSelector((state : any)=>state.themeRdx.theme)
  return (
    <Provider store={store} >
        <AppProvider theme={theme} >
          <View style={styles.container}>
            
            <TabBar 
              header={{
                title : "MyApp" ,
                headerRight : <Text> <Ionicons name='search-outline' size={24} /> </Text>
              }}
              data={
                [
                  {
                    name : "Home" ,
                    component : Home ,
                    defaultIconName : "home-outline" ,
                    focusedIconName : "home" ,
                    tabBarLabel : "Home" ,

                  } ,
                  {
                    name : "Settings" ,
                    component : Settings ,
                    defaultIconName : "settings-outline" ,
                    focusedIconName : "settings" ,
                    tabBarLabel : "Settings" ,

                  } ,
                ]
              }
            />
            <StatusBar style="auto" />
          </View>
        </AppProvider>
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
