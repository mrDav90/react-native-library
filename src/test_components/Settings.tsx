import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useSelector , useDispatch} from "react-redux"
import { ScrollView, View , Text, Switch } from '../../components'
import { setChecked } from '../reducers/theme.reducers'

const Settings = () => {
  const dispatch = useDispatch();
  const isChecked = useSelector((state : any)=> state.themeRdx.isChecked);
  //const [isChecked , setIsChecked] = useState(false);
  
  return (
    <ScrollView style={{padding : 10}} >
        <View >
          <Text >Settings</Text>
          <Switch value={isChecked} onValueChange={()=>{dispatch(setChecked(!isChecked))}} />
        </View>
    </ScrollView>  
  )
}

export default Settings

const styles = StyleSheet.create({})