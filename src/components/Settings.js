import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import SettingItem from './SettingItem';
import { Ionicons } from '@expo/vector-icons';
import Theme from './Theme';
import { ModalCust } from '../utils';
import TextCust from '../utils/text';

const Settings = () => {
    const currentMode = useSelector((state)=>state.themeRdx.currentMode);
    const [isVisible , setIsVisible] = useState(false);
    const [content , setContent] = useState(null);

    const handleTheme = () => {
        setIsVisible(true);
        setContent(<Theme/>)
    }
    const styles = StyleSheet.create({
        wrapper : {
            backgroundColor : currentMode.principalBgColor
        } ,
        container : {
            margin : 15 ,
            backgroundColor : currentMode.secondaryBgColor ,
            borderRadius  : 10 ,
            borderColor : "rgba(160, 170, 166, 0.16)" ,
            borderWidth : 1
        } ,
    })

    return (
        <ScrollView style={styles.wrapper} >
            <View style={styles.container} >
                <SettingItem 
                    title={"Compte"} 
                    icon={<Ionicons name='person-outline' size={24} color={currentMode.principalColor} />}  
                />
                <Theme/>
            </View>
        </ScrollView>
    )
}

export default Settings

const styles = StyleSheet.create({})