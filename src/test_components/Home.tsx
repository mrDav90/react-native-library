import { StyleSheet , Button /*Text*/ /*View*/ } from 'react-native'
import React from 'react'
import { View , Text, ScrollView, Toast} from '../../components'

const Home = () => {
  return (
    <ScrollView >
      <View  >
        <Text >Home</Text>
        <Button title="Test Toast" onPress={()=>{Toast.info({content : "Toast works successfully!" , duration : 3})}} />
      
      </View>
    </ScrollView>  
  )
}

export default Home

const styles = StyleSheet.create({})