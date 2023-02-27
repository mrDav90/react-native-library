import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { AppProvider } from './components';
import TabBarComponent from './src/test_components/TabBarComponent';
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
        <TabBarComponent />
        <StatusBar style="auto" />
      </View>
    </AppProvider>
    
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
