import { Pressable, StyleSheet, Text , View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import TextCust from '../utils/text'

const SettingItem = ({title , onPress , icon}) => {
    const currentMode = useSelector((state)=>state.themeRdx.currentMode)
    const styles = StyleSheet.create({
        wrapper : {
            width:"100%",
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            flexDirection:'row',
            paddingVertical : 15
            // borderBottomColor : colors.dividerColor ,
            // borderBottomWidth : 1
        } ,
        container : {
            display:'flex',
            justifyContent:'flex-start',
            alignItems:'center',
            flexDirection:'row',
        } ,
     
    })
    return (
        <Pressable style={styles.wrapper} onPress={onPress}  >          
            <View style={styles.container} >
            {
                icon && 
                icon
            }
            <TextCust content={title} />
            </View>
            <Ionicons  name='chevron-forward' size={24} color={currentMode.principalColor} />
        </Pressable>
    )
}

export default SettingItem

