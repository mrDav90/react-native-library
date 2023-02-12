import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import { message } from './src/func';
import { BottomSheetComponent, Toast } from './src/utils';
import Portal from './src/utils/portal';

export default function App() {

  const success = () => {
    Toast.success({content:"  Here we are a success toast" , duration : 3})
  }

  useEffect(()=>{
    message()
  },[])
  return (
    <Portal.Host>
      <View style={styles.container}>
        <Button onPress={success} title="success"  /> 

        <BottomSheetComponent 
          content={<Text>Hello les amis</Text>}
          points={['25%','50%','75%']} 
        />
        
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

