import { StyleSheet, Text, View , TouchableOpacity , TouchableOpacityProps, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React, { useEffect } from 'react'
import { Theme } from '..'

interface ButtonProps extends TouchableOpacityProps {
    //content ?: React.ReactNode | string
    type ?: "primary" | "default" | "ghost" ,
    loading ?: boolean ,
    style ?: StyleProp<TouchableOpacityProps> ,
    disabled ?: boolean
}

interface ButtonStyles {
  container ?: ViewStyle ,
  text ?: TextStyle ,
}

const Button = (buttonProps : ButtonProps) => {
    
    const {type , loading , disabled} = buttonProps;
    const styles  = StyleSheet.create<ButtonStyles>({
      container : {
        backgroundColor : Theme.colors.primary_color ,
        flex : 1 ,
        flexDirection : "row" ,
        justifyContent : "center",
        alignItems:"center" ,
        paddingVertical : 10 ,
        borderRadius : 5 ,
        opacity : buttonProps.disabled ? 0.7 : 1
      } ,
      text : {
        color : "#fff" ,
        fontSize: 15
      }
    })

    
    return (
      <TouchableOpacity  >
        <View style={ StyleSheet.compose(styles.container , buttonProps.style)} >
          {
            typeof buttonProps.children === "string" ?
            <Text style={styles.text} > {buttonProps.children} </Text>
            :
            buttonProps.children
          }
        </View>

      </TouchableOpacity>
    )
}

export default Button

