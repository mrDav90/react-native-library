import {  StyleSheet , Modal , TouchableWithoutFeedback , Animated, TouchableOpacity } from 'react-native'
import { COLORS, View } from '..';
import React, { useEffect, useRef , useMemo , useCallback, useContext } from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import { ThemeContext } from '../provider/Provider';
import { Theme } from '..';

export interface BottomSheetModalProps {
    isVisible ?: boolean , 
    setIsVisible ?: any ,
    content ?: React.ReactNode ,
    enablePanDownToClose ?: boolean ,
    points ?: [] ,
    fullScreen ?: boolean ,
    onClose ?: ()=>void
}

const BottomSheetModal = (bottomSheetModalProps : BottomSheetModalProps) => {
    const themeContext = useContext(ThemeContext)
    const theme : any = themeContext === "light" && Theme.lightMode || themeContext === "dark" && Theme.darkMode;
    const animatedValue = useRef(new Animated.Value(0)).current

    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => bottomSheetModalProps.points ? bottomSheetModalProps.points : ['50%','75%','90%'], []);
  
    const handleSheetChanges = useCallback((index:any) => {
      if (index === -1) {
            bottomSheetModalProps.setIsVisible(false);
      }
    }, []);

    useEffect(()=>{
        if (bottomSheetModalProps.isVisible) {
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
                bottomSheetModalProps.setIsVisible(false)
            });
        }
    },[])

    return (
        <Modal 
            animationType="fade"
            transparent={true}
            visible={bottomSheetModalProps.isVisible}
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
                        height : "100%",
                    }}
                >

                        <TouchableWithoutFeedback 
                            onPress={()=>{bottomSheetModalProps.setIsVisible(false)}}
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
                            style={{zIndex:999,}}
                            enablePanDownToClose={ bottomSheetModalProps.enablePanDownToClose?true:false}
                            backgroundStyle={{
                                backgroundColor: theme.modal_bg_color ,
                                // shadowColor:"gray",
                                // shadowOffset: {
                                //     height : 1 ,
                                //     width : 1
                                // } ,
                                // shadowRadius : 5 ,
                                // shadowOpacity : 0.5 ,
                                borderWidth : 0.5 ,
                                borderColor : COLORS.divider_color
                            }}
                            handleIndicatorStyle={{backgroundColor: theme.principal_color }}
                            
                        >
                            <View style={styles.container}>
                                {
                                    bottomSheetModalProps.content 
                                }
                            </View>
                        </BottomSheet>

                </View>

        </Modal>
    )
}

export default BottomSheetModal

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
})