import { Provider } from 'react-redux';
import React , {Fragment} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { TabBar, View } from './components';
import { AppProvider, Navigation } from './components';
import Buttons from './src/test_components/Buttons';
import Chips from './src/test_components/Chips';
import Home from './src/test_components/Home';
import Inputs from './src/test_components/Inputs';
import TabBarComponent from './src/test_components/TabBarComponent';
import Toasts from './src/test_components/Toasts';
import BottomSheets from './src/test_components/BottomSheets';
import Cards from './src/test_components/Cards';
import { store } from './src/reducers/store';
import {useSelector} from "react-redux"

const PreApp = () => {
  const theme : any = useSelector((state : any)=>state.themeRdx.theme)
  return (
    <AppProvider theme={theme} >
      <View style={styles.container}>
        <Navigation 
          screens={[
            {
              name : "TabBar" ,
              component : TabBarComponent ,
              headerShown : false
            },
            {
              name : "Home" ,
              component : Home ,
              headerShown : true
            } ,
            {
              name : "Buttons" ,
              component : Buttons ,
              headerShown : true
            } ,
            {
              name : "Toasts" ,
              component : Toasts ,
              headerShown : true
            } ,
            {
              name : "Chips" ,
              component : Chips ,
              headerShown : true
            } ,
            {
              name : "Inputs" ,
              component : Inputs ,
              headerShown : true
            } ,
            {
              name : "BottomSheets" ,
              component : BottomSheets ,
              headerShown : true
            } ,
            {
              name : "Cards" ,
              component : Cards ,
              headerShown : true
            } ,
            
          ]}
        />
        {/* <TabBarComponent /> */}
        <StatusBar style="auto" />
      </View>
    </AppProvider>
  )
}
export default function App() {
 
  return (
      <Provider store={store} >
          <PreApp />
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
