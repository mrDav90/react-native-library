import { Pressable, PressableProps, StyleSheet, ViewProps } from 'react-native'
import { Text ,  View } from '..'
import { Ionicons } from '@expo/vector-icons'
import React, { useContext, useEffect } from 'react'
import { COLORS } from '../colors'
import { ThemeContext } from '../provider/Provider'
import Divider from '../divider'

export interface SectionListProps {
    title ?: string
    data : SectionListItemProps[] ,
    bordered ?: boolean
}

interface SectionListItemProps extends PressableProps {
    name ?: string , 
    icon ?: string ,
    hideDivider ?: boolean 
}

const SectionList = (props: SectionListProps) => {
    const theme : any = useContext(ThemeContext);
    props.data[props.data.length-1].hideDivider = true;
    const styles = StyleSheet.create({
        container : {
            flex : 1 ,
            width : "100%" , 
            padding : 0 ,
            borderWidth  : props.bordered  ? 1  : 0 ,
            borderColor : COLORS.divider_color , 
            borderRadius : 10
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
        <View style={{marginVertical : 10}}>
            {
                props.title && <Text style={{fontWeight : "bold" , marginBottom : 10 , marginLeft : -5}} > {props.title} </Text>
            }
            
            <View style={styles.container}>
            {
                props.data.map((item , id)=>(
                    <Pressable  key={id} {...item}  >
                        <View style={styles.itemContent} >
                                <View style={{display:"flex",flexDirection:"row"}}>
                                    {
                                        item.icon && <Ionicons name={item.icon as any} color={theme.principal_color} size={18} style={{marginRight : 2}} />
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
        </View>
    )
}

export default SectionList

