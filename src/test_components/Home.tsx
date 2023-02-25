import { StyleSheet ,  /*Text*/ /*View*/ } from 'react-native'
import React, { useState } from 'react'
import { View , Text, ScrollView, Toast, Button , Switch, BottomSheetModal, Input} from '../../components'

const Home = () => {
   
    const [isVisible , setIsVisible] = useState(false);
    return (
      <ScrollView  style={{padding : 10}} >
        <View >
          <Text >Home</Text>
          <Input prefixIconName='mail-outline' label='Email' outline />
          <Input prefixIconName='lock-closed-outline' label='Mot de passe' outline type='password' />
          <Button onPress={()=>{Toast.success({content: "Toast works" , duration : 3})}} style={styles.button} >Test button</Button>
          <Button type='primary' onPress={()=>{setIsVisible(true)}} > Open Bottom-sheet-modal </Button>
          
          <BottomSheetModal 
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            content={<Text>Bottom Sheet works</Text>}
          />
        </View>
      </ScrollView>  
    )
}

export default Home

const styles : any = StyleSheet.create({
  button : {
    width : 200 ,
  }
})