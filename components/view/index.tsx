import React, { useContext } from 'react'
import {
  StyleProp,
  StyleSheet ,
  Text,
  TextProps,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native'
import { ThemeContext } from '../provider/Provider'
interface ViewInterface extends ViewProps, TextProps {
  children?: React.ReactNode 
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>
  relevant ?: boolean
}
function AntmView ( props : ViewInterface) {
 
    const { style , ...restProps } = props
    const theme : any = useContext(ThemeContext);

    // if (['number', 'string'].includes(typeof children)) {
    //   return <Text {...restProps} children={children} />
    // }

    // if (Array.isArray(children)) {
    //   if (children.some(React.isValidElement)) {
    //     return (
    //       <View {...restProps}>
    //         {React.Children.map(children, (child) => {
    //           if (React.isValidElement(child)) {
    //             return child
    //           }
    //           return <AntmView>{child}</AntmView>
    //         })}
    //       </View>
    //     )
    //   } else {
    //     return (
    //       <Text
    //         {...restProps}
    //         children={children.reduce((a, b) => (a || '') + '' + (b || ''))}
    //       />
    //     )
    //   }
    // }

    return <View style={StyleSheet.compose({flex:1} , props.style)} {...restProps} />
}

export default AntmView