import React, { useEffect, useState , useRef } from 'react';
import { Animated , View  ,Text , StyleSheet } from 'react-native';
import { ToastProps } from './interface';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../colors/colors.utils';

const Toast = ({content , type} :  ToastProps)  => {

  const fadeAnim  = useRef(new Animated.Value(0)).current;

    const styles = StyleSheet.create({
        container : {
            width: "auto" ,
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
            alignItems : "center",
            shadowColor : "gray",
            shadowOpacity : 0.3 ,
            shadowRadius  : 10 ,
            shadowOffset : {
                width : 2 ,
                height : 2
            },
           backgroundColor : type === "info" && colors.infoColor || type === "success" && colors.successColor || type === "error" && colors.errorColor || type === "warning" && colors.warningColor 
        } ,
        content : {
            color : "#fff",
            fontSize : 15 ,
        } ,
        textContent : {
            width : "auto" ,
            maxWidth : "90%",
        } ,
        iconContent : {
            width: "10%" ,
            display : "flex",
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
    
                    <View style={styles.iconContent} >
                        <Ionicons  
                            name={ 
                                (type==="success" && "checkmark-circle" as any ) ||
                                (type==="error" && "close-circle" as any) ||
                                (type==="warning" && "alert-circle" as any) ||
                                (type==="info" && "information-circle" as any) 
                            }
                            size={24}
                            color={"#fff"}
                        />
                    </View>
                    <View style={styles.textContent} >
                            <Text style={styles.content} > {content.trim()} </Text>
                    </View>

        </Animated.View>
  )
}

export default Toast