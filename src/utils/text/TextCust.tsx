import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { TextCustProps } from './interface'
import { useSelector } from 'react-redux';

const TextCust = (textCustProps  : TextCustProps) : any => {
    const currentMode = useSelector((state : any)=>state.themeRdx.currentMode);

    const styles = StyleSheet.create({
        text : {
            color : currentMode.principalColor
        }
    })
    
    return (
        <Text style={styles.text} >
            {
                textCustProps.content
            }
        </Text>
    )
}

export default TextCust

