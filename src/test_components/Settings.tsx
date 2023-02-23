import { StyleSheet, Button } from 'react-native'
import React from 'react'
import { ScrollView, View , Text } from '../../components'
import { useDispatch } from 'react-redux'
import { setTheme } from '../reducers/theme.reducers'

const Settings = () => {
  const dispatch = useDispatch();
  return (
    <ScrollView >
        <View >
          <Text >Settings</Text>
          <Button title='Dark' onPress={()=>{dispatch(setTheme("dark"))}} />
          <Button title='Light' onPress={()=>{dispatch(setTheme("light"))}} />
        </View>
    </ScrollView>  
  )
}

export default Settings

const styles = StyleSheet.create({})