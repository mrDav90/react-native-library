import React, { useEffect, useState , useRef } from 'react';
import { Animated , View  ,Text , StyleSheet } from 'react-native';
import { NotificationProps } from './interface';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../colors/colors.utils';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Notification = ( notificationProps :  NotificationProps)  => {

  const fadeAnim  = useRef(new Animated.Value(0)).current;

    const styles = StyleSheet.create({
        container : {
            width: "90%" ,
            maxWidth : "90%",
            zIndex : 9999,
            padding : 10 ,
            marginVertical : 0 ,
            borderRadius : 10 ,
            height : "auto" ,
            display  : "flex",
            flexDirection : "row",
            justifyContent:"flex-start",
            flexWrap : "wrap",
            alignItems : "flex-start" ,
            shadowColor : "gray",
            shadowOpacity : 0.3 ,
            shadowRadius  : 10 ,
            shadowOffset : {
                width : 2 ,
                height : 2
            },
           backgroundColor : "#fff"
        } ,
        title : {
            color : "#000" ,
            fontSize : 18
        } ,
        content : {
            color : "#000",
            fontSize : 15 ,
            fontWeight : "300"
        } ,
        textContent : {
            width : notificationProps.type ? "80%" : "90%" ,
            maxWidth : "90%",
        } ,
        iconContent : {
            width: "10%" ,
            display : "flex",
            justifyContent:"center",
            alignItems:"center"
        } ,
        closeContent : {
            width : "10%" ,
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }
    })
    
    useEffect(()=>{
        Animated.timing(fadeAnim , {
            toValue : 1 ,
            duration : 500 , 
            useNativeDriver : true
        }).start();  
    },[])

  return (
    <Animated.View
                
            style={
                [
                    styles.container ,
                    {
                        marginTop  : 0 ,
                        alignSelf:'center'
                    }, 
                    {
                        opacity : fadeAnim
                    }
                ]
            }
        >
                    {
                        notificationProps.type &&
                        <View style={styles.iconContent} >
                            <Ionicons  
                                name={ 
                                    ( notificationProps.type ==="success" && "checkmark-circle" as any ) ||
                                    ( notificationProps.type ==="error" && "close-circle" as any) ||
                                    ( notificationProps.type ==="warning" && "alert-circle" as any) ||
                                    ( notificationProps.type ==="info" && "information-circle" as any) 
                                }
                                size={24}
                                color={ 
                                        notificationProps.type  === "info" && colors.infoColor || 
                                        notificationProps.type  === "success" && colors.successColor || 
                                        notificationProps.type  === "error" && colors.errorColor || 
                                        notificationProps.type  === "warning" && colors.warningColor 
                                    }
                            />
                        </View>
                        
                    }
            
                    <View style={styles.textContent} >
                            <Text style={styles.title} > {  notificationProps.title.trim()} </Text>
                            <Text style={styles.content} > {  notificationProps.content.trim()} </Text>
                    </View>
                    <View style={styles.closeContent} >
                            <TouchableOpacity onPress={notificationProps.close} >
                                <Ionicons name="ios-close-outline" size={24} color="black" />
                            </TouchableOpacity>
                    </View>

        </Animated.View>
  )
}

export default Notification