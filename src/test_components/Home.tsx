import { StyleSheet ,  /*Text*/ /*View*/ } from 'react-native'
import React, { useState } from 'react'
import { View , Text, ScrollView, Toast, Button , Switch, BottomSheetModal, Input, List, WingBlank, Card, Chip} from '../../components'

const Home = ({navigation} : any) => {
   
    const [isVisible , setIsVisible] = useState(false);
    return (
      <ScrollView  style={{padding : 10}} >
        <View >

          <WingBlank>
            <Text>Home</Text>
          </WingBlank>

          <WingBlank>
            <List title="Composants" bordered > 
                <List.Item content="Buttons" onPress={()=>{navigation.navigate("Buttons")}} />   
                <List.Item content="Inputs" onPress={()=>{navigation.navigate("Inputs")}} />   
                <List.Item content="Chips" onPress={()=>{navigation.navigate("Chips")}} />   
                <List.Item content="BottomSheets" onPress={()=>{navigation.navigate("BottomSheets")}} />   
                <List.Item content="Cards" onPress={()=>{navigation.navigate("Cards")}} />   
                <List.Item content="Toasts" onPress={()=>{navigation.navigate("Toasts")}} />   
            </List>  
          </WingBlank>

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