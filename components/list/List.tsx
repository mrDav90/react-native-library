import { StyleSheet, View, ViewProps } from 'react-native'
import React from 'react'
import { Text } from '..'
import ListItem from './ListItem'

interface ListProps extends ViewProps {
    title ?: string ,
    content ?:  React.ReactNode  //ListItemProps
}


const List = (listProps : ListProps) => {
    // const { style , ...restListProps} = listProps;
    const styles = StyleSheet.create({})
    return (
        <View>
            <Text style={{fontSize : 20 , fontWeight : "600"}} > {listProps.title} </Text>
            <View>
                {listProps.children}
            </View>
        </View>
    )
}

List.Item = ListItem

export default List

