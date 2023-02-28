import { Pressable, PressableProps, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import React, { useContext } from 'react'
import { Text } from '..';
import { ThemeContext } from '../provider/Provider';

interface ListItemProps extends PressableProps {
    style?: StyleProp<ViewStyle> ,
    content ?: React.ReactNode | string 
}

const ListItem = (listItemProps : ListItemProps) => {
    const theme : any = useContext(ThemeContext);
    const {style , ...restListItemProps}  = listItemProps ;
    const styles = StyleSheet.create({
        item : {
            width : "100%" ,
            borderBottomWidth : 1 ,
            borderBottomColor : theme.list_border_color ,
            paddingVertical : 10 ,
            height : 50, 
            display : "flex",
            flex : 1 ,
            flexDirection : "row",
            alignItems : "center",
        }
    })
    return (
        <Pressable {...restListItemProps} >
            <View style={StyleSheet.compose(styles.item , listItemProps.style as any)} >
                {
                    typeof listItemProps.content === "string" ?
                    <Text> {listItemProps.content} </Text> 
                    :
                    listItemProps.content
                }
            </View>
        </Pressable>
    )
}

export default ListItem

const styles = StyleSheet.create({})