import { Pressable, PressableProps, StyleSheet, Text, View , ViewProps } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React, { useContext, useEffect } from 'react'
import { COLORS } from '../colors'
import { ThemeContext } from '../provider/Provider'
import Divider from '../divider'

export interface SectionListProps {
    title ?: string
    data : SectionListItemProps[]
}

interface SectionListItemProps extends PressableProps {
    name ?: string , 
    icon ?: string ,
    hideDivider ?: boolean 
}

const SectionList = (props: SectionListProps , sectionProps : SectionListItemProps) => {
    const theme : any = useContext(ThemeContext);
    props.data[props.data.length-1].hideDivider = true;
    const styles = StyleSheet.create({
        container : {
            flex : 1 ,
            width : "100%" , 
            padding : 5
        } ,
        text : {
            fontSize : 16
        },
        itemContent : {
            flex : 1 ,
            width : "100%" ,
            display :"flex",
            flexDirection : "row",
            justifyContent:"space-between",
            padding : 10
        }
    }) 

    // useEffect(()=>{
    //    for (let index = 0; index < props.data.length; index++) {
    //         const element = props.data[index];
    //         element.divider = true
    //         props.data[props.data.length-1].divider = false ;
    //    }
    // },[])
    
    return (
        <View style={styles.container}>
        {
            props.data.map((item , id)=>(
                <Pressable  key={id} {...sectionProps} >
                   <View style={styles.itemContent} >
                        <View style={{display:"flex",flexDirection:"row"}}>
                            {
                                item.icon && <Ionicons name={item.icon as any} size={18} style={{marginRight : 5}} />
                            }
                            <Text style={styles.text} > {item.name} </Text>
                        </View>
                        
                        <Ionicons name={'chevron-forward-outline' as any} color={theme.divider_color} size={18} />
                   </View>
                  {
                    !item.hideDivider  &&  <Divider/>
                  }
                </Pressable>
            ))
        }
        </View>
    )
}

export default SectionList

