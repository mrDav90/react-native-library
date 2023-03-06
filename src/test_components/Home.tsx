import { StyleSheet ,  /*Text*/ /*View*/ } from 'react-native'
import React, { useState } from 'react'
import { View , Text, ScrollView, Toast, Button , Switch, BottomSheetModal, Input, List, WingBlank, Card, Chip , SectionList} from '../../components'

const Home = ({navigation} : any) => {
   
    const [isVisible , setIsVisible] = useState(false);
    return (
      <ScrollView  style={{padding : 10}} >
        <View >

          <WingBlank>
            <SectionList 
                title='Home'
                data={
                    [
                        {
                            name  : "Boutons" ,
                            onPress : ()=>{navigation.navigate("Buttons")}
                        } ,
                        {
                            name  : "Inputs" ,
                            onPress : ()=>{navigation.navigate("Inputs")}
                        } ,
                        {
                            name  : "Chips" ,
                            onPress : ()=>{navigation.navigate("Chips")}
                        } ,
                        {
                          name  : "BottomSheets" ,
                          onPress : ()=>{navigation.navigate("BottomSheets")}
                        } ,
                        {
                          name  : "Cards" ,
                          onPress : ()=>{navigation.navigate("Cards")}
                        } ,
                        {
                          name  : "Toasts" ,
                          onPress : ()=>{navigation.navigate("Toasts")}
                        } ,
                    ]
                }
                bordered
            />
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