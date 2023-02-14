import { Animated, Button, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { AlertCustProps } from './interface'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../colors/colors.utils'
const AlertCust = (alertCustProps : AlertCustProps) => {
    const animatedValue = useRef(new Animated.Value(0)).current
    const [isVisible , setIsVisible] = useState(true);
    const styles = StyleSheet.create({
        container : {
            backgroundColor : "#fff" ,
            borderRadius : 10 ,
            paddingVertical : 15 , 
            width : "100%",
            display:"flex" ,
            justifyContent:"center",
            flexDirection:"column" , 
            alignItems:"center" ,
            // borderWidth  : 1 ,
            // borderColor : "#000"
            
        } ,
        title : {
            fontSize : 24 ,
            fontWeight : "bold",
            marginBottom : 10
        } ,
        message : {
            fontSize: 14 ,
            marginBottom : 10 ,
            fontWeight : "300"
        } , 
        actionsContainer: {
            display :"flex", 
            justifyContent:"center" , 
            alignItems:'center',
            flexDirection:"row"  ,width:"100%" , 
            marginTop : 10 
        } ,
        cancelButton : {
            borderWidth  : 1 ,
            borderColor : colors.errorColor ,
            borderRadius : 4 ,
            marginRight : 10
        } ,
        validButton : {
            borderWidth  : 1 ,
            borderColor : colors.successColor ,
            borderRadius : 4 ,
            marginLeft : 10
        }

    })

    const onCancel = () => {
        setIsVisible(false);
        alertCustProps.onCancel()
    }

    const onValid = () => {
        alertCustProps.onValid();
        onCancel();
    }

    useEffect(()=>{
        Animated.timing(animatedValue , {
            toValue : 1 ,
            duration : 500 ,
            useNativeDriver : false
        }).start();
    },[])
    return (
        <Modal 
            animationType="fade"
            transparent={true}
            visible={isVisible}
        >
            <View
                style={{
                    backgroundColor : "rgba(0,0,0,0.3)",
                    position : "absolute",
                    top : 0 ,
                    left : 0 ,
                    right : 0 ,
                    bottom : 0 ,
                    width : "100%",
                    height : "100%" ,
                    display : "flex",
                    justifyContent : "center",
                    alignItems : "center"
                }}
            >
                 <TouchableWithoutFeedback 
                    onPress={()=>{   
                        onCancel()
                    }}
                >
                    <View
                        style={{
                            position : "absolute",
                            top : 0 ,
                            left : 0 ,
                            right : 0 ,
                            bottom : 0 ,
                        }}
                    />
                    
                </TouchableWithoutFeedback>
                <Animated.View
                    style={{      
                        position : "absolute",              
                        width : "80%",
                        height  : "auto" ,
                        display :"flex",
                        justifyContent:"center",
                        alignContent:"center",            
                        backgroundColor : /*currentMode.principalBgColor*/ "#fff" ,
                        borderRadius : 15 ,
                        paddingVertical : 10 , 
                        paddingHorizontal : 10
                        
                    } as any}
                >
                    <View style={styles.container} >
                        <Text> {alertCustProps.icon}  </Text>
                        {alertCustProps.title && <Text style={styles.title} > {alertCustProps.title} </Text>}       
                        <Text style={styles.message} > {alertCustProps.message} </Text>
                        <View style={styles.actionsContainer} >
                            <TouchableOpacity style={styles.cancelButton} >
                                <Button color={colors.errorColor}   onPress={onCancel} title={alertCustProps.cancelText ? alertCustProps.cancelText : "Cancel"}  />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.validButton} >
                                <Button color={colors.successColor} onPress={onValid} title={alertCustProps.validText ? alertCustProps.validText : "Valid"}    /> 
                            </TouchableOpacity>
                             
                        </View>
                    </View>
                </Animated.View>

            </View>

        </Modal>
       
    )
}

export default AlertCust

