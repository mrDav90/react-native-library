import { StyleSheet, Text, View , TouchableOpacity , TouchableOpacityProps, StyleProp, ViewStyle, TextStyle, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { COLORS } from '..'
import { ThemeContext } from '../provider/Provider'

interface ButtonProps extends TouchableOpacityProps  {
    //content ?: React.ReactNode | string
    type ?: "primary" | "default" | "outline" ,
    loading ?: boolean ,
    style ?: StyleProp<TouchableOpacityProps> ,
    textStyle ?: StyleProp<TextStyle>,
    disabled ?: boolean ,
    onPress ?: ()=>void
}

interface ButtonStyles {
  container ?: ViewStyle ,
  text ?: TextStyle ,
}

const Button = (buttonProps : ButtonProps) => {
  const {style , textStyle , ...restProps} = buttonProps
    const theme : any = useContext(ThemeContext);
    const styles  = StyleSheet.create<ButtonStyles>({
      container : {
        backgroundColor : buttonProps.type === "primary" && COLORS.primary_color as any || "transparent"   ,
        flex : 1 ,
        flexDirection : "row" ,
        maxWidth : "100%",
        display:"flex" ,
        justifyContent : "center",
        alignItems:"center" ,
        paddingVertical : 10 ,
        paddingHorizontal : 10,
        borderRadius : 5 ,
        opacity : buttonProps.disabled ? 0.7 : 1 ,  
        borderWidth : 1 ,
        borderColor : buttonProps.type === "primary" && COLORS.primary_color || buttonProps.type ===  "outline" &&  COLORS.primary_color || COLORS.default_color
      } ,
      text : {
        color : buttonProps.type === "primary" && "#fff" || buttonProps.type === "outline" && COLORS.primary_color as any  ||  theme.principal_color ,
        fontSize: 17 ,
        fontWeight : "500" ,
      }
    })

    
    return (
      <TouchableOpacity  
        {...restProps}
      >
        <View style={ StyleSheet.compose(styles.container , buttonProps.style)} >
          {
            buttonProps.loading &&
            <ActivityIndicator 
              color={
                  buttonProps.type === "primary" && "#fff" ||
                  buttonProps.type === "outline" && COLORS.primary_color as any ||
                  null
              } 
            />
          }
          {
            typeof buttonProps.children === "string" ?
            <Text style={StyleSheet.compose(styles.text , textStyle)} > {buttonProps.children} </Text>
            :
            buttonProps.children
          }
        </View>

      </TouchableOpacity>
    )
}

export default Button

