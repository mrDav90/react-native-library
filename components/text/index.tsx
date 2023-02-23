import { StyleProp, StyleSheet, Text, TextProps, TextStyle, View } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../provider/Provider'
import {Theme} from "../../components"

interface TextInterface {
  children ?: React.ReactNode | string ,
  style ?: StyleProp<TextStyle>
}

const TextCus = (textInterface : TextInterface) => {
    const themeContext = useContext(ThemeContext)
    const theme : any = themeContext === "light" && Theme.lightMode || themeContext === "dark" && Theme.darkMode;
    return (
    
      <Text style={{color : theme.principal_color}} {...textInterface}  >  {textInterface.children} </Text>
      
    )
}

export default TextCus

const styles = StyleSheet.create({})