import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../provider/Provider'
import { COLORS } from '../colors';

const Divider = () => {
    const theme : any = useContext(ThemeContext);
    const styles = StyleSheet.create({
        divider : {
            flex :1 ,
            height : 1 ,
            borderBottomWidth  : 1 ,
            borderBottomColor : COLORS.divider_color
        }
    })
    return (
        <View style={styles.divider} />
    )
}

export default Divider

