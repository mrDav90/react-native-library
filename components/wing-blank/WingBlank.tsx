import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native'
import React from 'react'

interface WingBlankProps extends ViewProps {
    size ?: "sm" | "md" | "lg" ,
    style ?: StyleProp<ViewStyle>
}
const WingBlank = ( props : WingBlankProps ) => {
    const {style  , ...restProps} = props
    const styles = StyleSheet.create({
        view : {
            flex : 1 ,
            backgroundColor : "transparent" ,
            marginVertical : props.size ? (props.size === "sm" && 10 as any  || props.size === "md" && 20 as any || props.size === "lg" && 30 as any) : 10
        }
    })
    return (
        <View style={styles.view} {...restProps} />
    )
}

export default WingBlank

