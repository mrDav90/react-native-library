import { ScrollView, StyleSheet, Text, View , Modal , TouchableWithoutFeedback , Animated, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState , useMemo , useCallback } from 'react'
import { useSelector } from 'react-redux';
import { colors } from '../colors/colors.utils';
import { Ionicons } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import { ModalProps } from './interface';


const ModalCust = (modalProps : ModalProps) => {
    const currentMode = useSelector((state : any)=>state.themeRdx.currentMode);
    //const [animatedValue , setAnimatedValue] = useState(0);
    const animatedValue = useRef(new Animated.Value(0)).current

    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => modalProps.points ? modalProps.points : ['50%','75%','90%'], []);
  
    const handleSheetChanges = useCallback((index) => {
      if (index === -1) {
            modalProps.setIsVisible(false);
      }
    }, []);

    useEffect(()=>{
        if (modalProps.isVisible) {
            Animated.timing(animatedValue , {
                toValue : 1 ,
                duration : 500 ,
                useNativeDriver : false
            }).start();
        }
        else{
            Animated.timing(animatedValue , {
                toValue : 0 ,
                duration : 500 ,
                useNativeDriver : false
            }).start(()=>{
                modalProps.setIsVisible(false)
            });
        }
    },[])

    return (
        <Modal 
            animationType="slide"
            transparent={true}
            visible={modalProps.isVisible}
        >
                <View
                    style={{
                        backgroundColor : "rgba(0,0,0,0.2)",
                        position : "absolute",
                        top : 0 ,
                        left : 0 ,
                        right : 0 ,
                        bottom : 0 ,
                        width : "100%",
                        height : "100%",
                    }}
                >

                        <TouchableWithoutFeedback 
                            onPress={()=>{modalProps.setIsVisible(false)}}
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

                        <BottomSheet
                            ref={bottomSheetRef}
                            index={0}
                            snapPoints={snapPoints}
                            onChange={handleSheetChanges}
                            style={{zIndex:9999,}}
                            enablePanDownToClose={ modalProps.enablePanDownToClose?true:false}
                            backgroundStyle={{
                                backgroundColor:currentMode.principalBgColor,
                                shadowColor:"gray",
                                shadowOffset: {
                                    height : 1 ,
                                    width : 1
                                } ,
                                shadowRadius : 5 ,
                                shadowOpacity : 0.5
                            }}
                            handleIndicatorStyle={{backgroundColor: currentMode.principalColor }}
                            
                        >
                            <View style={styles.container}>
                                {
                                    modalProps.content 
                                }
                            </View>
                        </BottomSheet>

                        {/* <Animated.View
                            style={{
                                position : "absolute",
                                width : "100%",
                                height : fullScreen ? "100%" : "90%",
                                left : 0 ,
                                right : 0,
                                bottom : 0 ,             
                                backgroundColor : currentMode.principalBgColor,
                                borderTopRightRadius : fullScreen ? 0 : 20 ,
                                borderTopLeftRadius  : fullScreen ? 0 : 20,
                                shadowColor : "gray",
                                shadowRadius :  8,
                                shadowOpacity : 0.3 ,
                                shadowOffset : {
                                    height : 1 ,
                                    width : 1
                                }
                               
                            }}
                        >
                            <View style={{height: "10%",width:"100%",borderBottomColor:colors.dividerColor,borderBottomWidth:1,display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row"}} >
                                <TouchableOpacity onPress={()=>{setIsModalCustomizedVisible(false)}} style={{padding:15}} >
                                    <Ionicons name='close' size={24} color={currentMode.principalColor} />
                                </TouchableOpacity>
                            </View>
                            {content}
                        </Animated.View>  */}

                </View>

        </Modal>
    )
}

export default ModalCust

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
})