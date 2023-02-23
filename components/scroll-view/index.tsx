// import { StyleProp, StyleSheet, TextProps, View, ViewProps, ViewStyle } from 'react-native'
// import React, { useContext } from 'react'
// import { ThemeContext } from '../provider/Provider'
// import {Theme} from "../../components"

// interface ScrollViewInterface extends ViewProps  {
//     children ?: React.ReactNode , 
// }
// const ViewCus = (viewProps : ScrollViewInterface)  => {
//     const themeContext = useContext(ThemeContext)
//     const theme : any = themeContext === "light" && Theme.lightMode || themeContext === "dark" && Theme.darkMode;
//     return (
    
//       <View style={{backgroundColor : theme.principal_bg_color}} > {viewProps.children} </View>
      
//     )
// }

// export default ViewCus

// const styles = StyleSheet.create({})

import React, { useContext } from 'react'
import {
  StyleProp,
  Text,
  TextProps,
  TextStyle,
  ScrollView,
  ScrollViewProps,
  ViewStyle,
} from 'react-native'
import { ThemeContext } from '../provider/Provider'
import {Theme} from "../../components"
interface ScrollViewInterface extends ScrollViewProps, TextProps {
  children?: React.ReactNode 
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>
}
function AntmScrollView ( props : ScrollViewInterface) {
 
 
    const { children, ...restProps } = props
    const themeContext = useContext(ThemeContext)
    const theme : any = themeContext === "light" && Theme.lightMode || themeContext === "dark" && Theme.darkMode;
    

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

    return <ScrollView style={{backgroundColor:theme.principal_bg_color , flex : 1}} {...props} />
  
}

export default AntmScrollView