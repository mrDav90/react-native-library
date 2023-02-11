import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import { Badge } from 'react-native-paper';
import { message } from './src/func';
import { Toast } from './src/utils';
import Portal from './src/utils/portal';

export default function App() {
  const info = () => {
    Toast.info("info test" , 3)
  }
  const success = () => {
    Toast.success("success test" , 3)
  }
  const error = () => {
    Toast.error("error test" , 3)
  }
  const warning = () => {
    Toast.warning("warning test" , 3)
  }

  useEffect(()=>{
    message()
  },[])
  return (
    <Portal.Host>
      <View style={styles.container}>
        <Button onPress={info} title="info"  /> 
        <Button onPress={success} title="success"  /> 
        <Button onPress={error} title="error"  /> 
        <Button onPress={warning} title="warning"  /> 
      </View>
    </Portal.Host>
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

