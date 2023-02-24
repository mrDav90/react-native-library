import { StyleSheet ,  /*Text*/ /*View*/ } from 'react-native'
import React from 'react'
import { View , Text, ScrollView, Toast, Button} from '../../components'

const Home = () => {
  return (
    <ScrollView >
      <View  >
        <Text >Home</Text>
        <Button  onPress={()=>{console.log("Top")}} style={styles.button} >Test button</Button>
      </View>
    </ScrollView>  
  )
}

export default Home

const styles : any = StyleSheet.create({
  button : {
    backgroundColor : "red" ,
  }
})