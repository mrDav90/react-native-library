import { StyleSheet, View, ViewProps } from 'react-native'
import React, { useContext } from 'react'
import { Text } from '..'
import ListItem from './ListItem'
import { ThemeContext } from '../provider/Provider'

interface ListProps extends ViewProps {
    title ?: string ,
    content ?:  React.ReactNode  //ListItemProps ,
    bordered ?: boolean
}


const List = (listProps : ListProps) => {
    // const { style , ...restListProps} = listProps;
    const theme : any = useContext(ThemeContext);
    const styles = StyleSheet.create({
        childrenContainer : {
            borderWidth : listProps.bordered ? 1 : 0 ,
            borderColor  : listProps.bordered && theme.list_border_color ,
            borderRadius  : 10 ,
        }
    })
    return (
        <View>
            {
                listProps.title &&
                <Text style={{fontSize : 20 , marginLeft : -10 , marginBottom : 10 , fontWeight : "600"}} > {listProps.title} </Text>
            }
            <View style={styles.childrenContainer} >
                {listProps.children}
            </View>
        </View>
    )
}

List.Item = ListItem

export default List

