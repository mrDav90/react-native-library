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
// import { Provider } from 'react-redux';
// import { store } from './src/reducers/store';
// import {useSelector} from "react-redux"

export default function App() {
 // const theme = useSelector((state : any)=>state.themeRdx.theme)
  return (
    // <Provider store={store} >
        
    // </Provider>
    <AppProvider theme={"light"} >
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
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
