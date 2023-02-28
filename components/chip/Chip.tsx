import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { COLORS } from '../colors'
import { ThemeContext } from '../provider/Provider'
import { Ionicons } from '@expo/vector-icons'

interface ChipProps {
  iconName ?: string ,
  outline ?: boolean ,
  type ?: "default" | "success" | "error" | "warning" | "info" ,
  color ?: "string" ,
  size ?: "sm" | "md" | "lg" ,
  text ?: string | React.ReactNode ,

}
const Chip = (props : ChipProps) => {
  const theme : any = useContext(ThemeContext);
  const styles = StyleSheet.create({
    container : {
      padding : props.size === "lg" && 9 || props.size === "sm" && 5 || 7 , 
      width : props.size === "lg" && 125 || props.size === "sm" && 75 || 100 ,
      borderRadius : 30,
      display: 'flex',
      flexDirection : "row",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor :  (props.type === "success" && COLORS.success_bg_color || props.type === "error" && COLORS.error_bg_color || props.type === "warning" && COLORS.warning_bg_color || props.type === "info" && COLORS.info_bg_color ) as any || COLORS.divider_color ,
      borderWidth  : props.outline ? 1 : 0 ,
      borderColor : props.outline ? (props.type === "success" && COLORS.success_color || props.type === "error" && COLORS.error_color || props.type === "warning" && COLORS.warning_color || props.type === "info" && COLORS.info_color   ) as any  : "gray"
    } ,
    text : {
      fontSize : 16 ,
      color : (props.type === "success" && COLORS.success_color || props.type === "error" && COLORS.error_color || props.type === "warning" && COLORS.warning_color || props.type === "info" && COLORS.info_color   ) as any  || theme.primary_color
    }
  })
  return (
    <View style={styles.container} >
      {
        props.iconName  && 
        <Ionicons 
          name={props.iconName as any} 
          color={(props.type === "success" && COLORS.success_color || props.type === "error" && COLORS.error_color || props.type === "warning" && COLORS.warning_color || props.type === "info" && COLORS.info_color   ) as any  || theme.primary_color} 
          size={18} 
        />
      }
      <Text style={styles.text}> {props.text} </Text>
    </View>
  )
}

export default Chip

