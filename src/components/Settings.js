import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import SettingItem from './SettingItem';
import { Ionicons } from '@expo/vector-icons';
import Theme from './Theme';
import { ModalCust } from '../utils';

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
            padding : 15
        } ,
    })

    return (
        <ScrollView style={styles.wrapper} >
            <View style={styles.container} >
                <SettingItem 
                    title={"Compte"} 
                    icon={<Ionicons name='person-outline' size={24} color={currentMode.principalColor} />}  
                />
                <SettingItem 
                    title={"Thème"} 
                    icon={<Ionicons name='sunny-outline' size={24} color={currentMode.principalColor} />}
                    onPress={handleTheme}  
                />

                <ModalCust 
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                    content={content}
                />
            </View>
        </ScrollView>
    )
}

export default Settings

const styles = StyleSheet.create({})