import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, View , Text, Switch } from '../../components'

const Settings = () => {
  const [isChecked , setIsChecked] = useState(false);
  return (
    <ScrollView style={{padding : 10}} >
        <View >
          <Text >Settings</Text>
          <Switch value={isChecked} onValueChange={()=>{setIsChecked(!isChecked)}} />
        </View>
    </ScrollView>  
  )
}

export default Settings

const styles = StyleSheet.create({})