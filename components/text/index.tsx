import { StyleProp, StyleSheet, Text, TextProps, TextStyle, View } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../provider/Provider'

interface TextInterface {
  children ?: React.ReactNode | string ,
  style ?: StyleProp<TextStyle>
}

const TextCus = (textInterface : TextInterface) => {
    const {style , ...restTextInterface} = textInterface;
    const theme : any = useContext(ThemeContext);
    return (
    
      <Text style={StyleSheet.flatten([{color : theme.principal_color},textInterface.style])} {...restTextInterface}  >  {textInterface.children} </Text>
      
    )
}

export default TextCus

const styles = StyleSheet.create({})