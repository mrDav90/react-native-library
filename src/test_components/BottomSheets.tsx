import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { View , ScrollView , Text, Button, WingBlank, BottomSheetModal } from '../../components'

const BottomSheets = () => {
    const [isVisible , setIsVisible] = useState(false);
    return (
        <ScrollView  style={styles.container}>
            <View>
                <Text>BottomSheets</Text>
                <WingBlank>
                    <Button type="primary" onPress={()=>{setIsVisible(true)}} > Open  </Button>
                </WingBlank>
                
                <BottomSheetModal 
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                    content={<Text>Bottom Sheet works</Text>}
                />
            </View>
        </ScrollView>
        
    )
}

export default BottomSheets

const styles = StyleSheet.create({
    container : {
        padding : 10
    }
})