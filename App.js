import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import { message } from './src/func';
import { AlertCust, BottomSheetComponent, Notification, Toast , UtilsProvider } from './src/utils';


export default function App() {

  const success = () => {
    Toast.success({content:"  Here we are a success toast" , duration : 3})
  }

  const alert = () => {
    AlertCust.show({
      title : "Etes-vous sur ?" ,  
      message : "Vous pouvez plus revenir en arrière" ,
      validText : "Valider" ,
      onValid : ()=>{
        console.log("Top")
      } ,
      //icon : <Ionicons name="checkmark-circle-outline" size={72} color="black" />
    })
  }

  const notification = () => {
    Notification({
      content : "Hello" ,
      title : "Title here",
      
    })
  }

  useEffect(()=>{
    message()
  },[])
  return (
    <UtilsProvider>
      <View style={styles.container}>
        <Button onPress={success} title="success"  /> 
        <Button onPress={alert} title="Alert Test"  /> 
        <Button onPress={notification} title="Notification test"  /> 
        <BottomSheetComponent 
          content={<Text>Hello les amis</Text>}
          points={['25%','50%','75%']} 
        /> 
      </View>
    </UtilsProvider>
    
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

