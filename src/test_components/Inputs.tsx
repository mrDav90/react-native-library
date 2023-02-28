import { StyleSheet } from 'react-native'
import React from 'react'
import { View , ScrollView , Text, Button, WingBlank, Input } from '../../components'

const Inputs = () => {
  return (
    <ScrollView  style={styles.container}>
        <View>
            <Text>Inputs</Text>
            <WingBlank>
                <Input placeholder='Email' /*onChangeText={(value : any)=>{console.log(value)}}*/ prefixIconName='mail-outline' label='Email'  />
                <Input prefixIconName='lock-closed-outline' label='Mot de passe' outline type='password' />    
            </WingBlank>
        </View>
    </ScrollView>
    
  )
}

export default Inputs

const styles = StyleSheet.create({
    container : {
        padding : 10
    }
})