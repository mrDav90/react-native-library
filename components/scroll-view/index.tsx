import React, { useContext } from 'react'
import {
  StyleProp,
  Text,
  TextProps,
  TextStyle,
  ScrollView,
  ScrollViewProps,
  ViewStyle,
  StyleSheet
} from 'react-native'
import { ThemeContext } from '../provider/Provider'

interface ScrollViewInterface extends ScrollViewProps, TextProps {
  children?: React.ReactNode 
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>
}
function AntmScrollView ( props : ScrollViewInterface) {
 
 
    const { children, style , ...restProps } = props
    const theme : any = useContext(ThemeContext);

    if (['number', 'string'].includes(typeof children)) {
      return <Text {...restProps} children={children} />
    }

    if (Array.isArray(children)) {
      if (children.some(React.isValidElement)) {
        return (
          <ScrollView {...restProps}>
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return child
              }
              return <AntmScrollView>{child}</AntmScrollView>
            })}
          </ScrollView>
        )
      } else {
        return (
          <Text
            {...restProps}
            children={children.reduce((a, b) => (a || '') + '' + (b || ''))}
          />
        )
      }
    }

    return <ScrollView style={StyleSheet.compose({backgroundColor: theme.principal_bg_color , flex : 1} , props.style)} {...restProps} >
      {
        props.children
      }
    </ScrollView>
  
}

export default AntmScrollView