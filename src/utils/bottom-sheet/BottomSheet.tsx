import {StyleSheet, View  ,Text } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react'
//import { useSelector } from 'react-redux';
import BottomSheet from '@gorhom/bottom-sheet';
import { colors } from '../colors/colors.utils';
import { BottomSheetProps } from './interface';


const BottomSheetComponent = ( bottomSheetProps : BottomSheetProps) => {
    //const currentMode = useSelector((state)=>state.themeRdx.currentMode);
    
    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => bottomSheetProps.points ? bottomSheetProps.points : ['50%','75%'], []);
  
    // callbacks
    const handleSheetChanges = useCallback((index) => {
      //console.log('handleSheetChanges', index);
    }, []);

    const styles = StyleSheet.create({
    
        container: {
            flex: 1,
            //justifyContent: 'center',
            //backgroundColor : currentMode.principalBgColor
            backgroundColor :"#fff" ,
            padding : 10
        },
           
    })

  return (
        <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            backgroundStyle={{
                shadowColor : "gray" , 
                shadowOffset : {height : 1 , width : 1},
                shadowOpacity : 0.5 ,
                shadowRadius : 10 ,
                borderRadius : 20,
                //backgroundColor:currentMode.principalBgColor
                backgroundColor: "#fff"
            }}
            handleIndicatorStyle={{backgroundColor: /*currentMode.principalColor*/ "gray" }}
        >
            <View style={styles.container}>
                
                {
                    typeof bottomSheetProps.content === "string" ?
                    <Text> {bottomSheetProps.content} </Text>
                    :
                    <>
                        {bottomSheetProps.content}
                    </>
                }

            </View>
        </BottomSheet>
  )
}

export default BottomSheetComponent

