import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native'
import React, { useContext } from 'react'
import { Text } from '..';
import { COLORS } from '../colors';
import { ThemeContext } from '../provider/Provider';

interface CardProps extends ViewProps {
    header ?: string | React.ReactNode ,
    footer ?: string | React.ReactNode ,
    headerDivider ?: boolean ,
    footerDivider ?: boolean ,
    bordered ?: boolean ,
    style ?: StyleProp<ViewStyle> ,
    childrenStyle ?: StyleProp<ViewStyle>
}
const Card = (props : CardProps ) => {
    const {style , ...restProps} = props;
    const theme : any = useContext(ThemeContext);
    const styles = StyleSheet.create({
        container : {
            borderWidth : props.bordered ? 1 : 0 ,
            borderColor : props.bordered && theme.card_border_color as any ,
            borderRadius : 10 ,
            backgroundColor : theme.relevant_bg_color ,
        } ,
        text : {
            fontSize : 17 ,
        } ,
        header : {
            paddingHorizontal : 5 ,
            paddingVertical : 10 ,
            borderBottomWidth : props.headerDivider ? 1 : 0 ,
            borderBottomColor : props.headerDivider && theme.card_border_color as any ,
        },
        footer : {
            paddingHorizontal : 5 ,
            paddingVertical : 10 ,
            borderTopWidth : props.headerDivider ? 1 : 0 ,
            borderTopColor : props.headerDivider && theme.card_border_color as any ,
        }
    })
    return (
        <View style={StyleSheet.compose(styles.container , props.style as any)} {...restProps} >
            <View style={styles.header} >          
                {
                    typeof props.header === "string" ?
                    <Text style={styles.text} > {props.header} </Text>
                    :
                    props.header
                }
            </View>
            <View style={StyleSheet.compose({paddingHorizontal : 5 , paddingVertical : 20  } , props.childrenStyle)} >
                {
                    typeof props.children === "string" ?
                    <Text style={styles.text} > {props.children} </Text>
                    :
                    props.children
                }
            </View>
            <View style={styles.footer} >
                {
                    typeof props.footer === "string" ?
                    <Text style={styles.text} > {props.footer} </Text>
                    :
                    props.footer
                }
            </View>
            
        </View>
    )
}

export default Card

