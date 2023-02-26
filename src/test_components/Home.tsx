import { StyleSheet ,  /*Text*/ /*View*/ } from 'react-native'
import React, { useState } from 'react'
import { View , Text, ScrollView, Toast, Button , Switch, BottomSheetModal, Input, List, WingBlank} from '../../components'

const Home = () => {
   
    const [isVisible , setIsVisible] = useState(false);
    return (
      <ScrollView  style={{padding : 10}} >
        <View >

          <WingBlank>
            <Text >Home</Text>
          </WingBlank>

          <WingBlank>
            <Input onChangeText={(value : any)=>{console.log(value)}} prefixIconName='mail-outline' label='Email' outline />
            <Input prefixIconName='lock-closed-outline' label='Mot de passe' outline type='password' />    
          </WingBlank>

          <WingBlank>
            <Button onPress={()=>{Toast.default({content: "Toast works" , duration : 3})}} style={styles.button} textStyle={{color:"green"}} > Toast Button </Button>
          </WingBlank>

          <WingBlank>
            <Button type='primary' onPress={()=>{setIsVisible(true)}} > Open Bottom-sheet-modal </Button>
          </WingBlank>

          <WingBlank>
            <List title="Title">
                <List.Item content="Text1"/> 
                <List.Item content="Text2" />   
            </List>  
          </WingBlank>

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