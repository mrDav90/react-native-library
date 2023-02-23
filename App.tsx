import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { AppProvider, TabBar } from './components';
import Settings from './src/Settings';
import Home from './src/test_components/Home';

export default function App() {
  const [theme , setTheme] = useState("dark");
  return (
    <AppProvider theme={theme} >
        <View style={styles.container}>
          <Button title='Dark' onPress={()=>{setTheme("dark")}} />
          <Button title='Light' onPress={()=>{setTheme("light")}} />
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
