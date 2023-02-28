import { StyleSheet } from 'react-native'
import React from 'react'
import { View , ScrollView , Text, Button, WingBlank, Toast } from '../../components'

const Toasts = () => {
  return (
    <ScrollView  style={styles.container}>
        <View>
            <Text>Toasts</Text>
            <WingBlank>
                <Button onPress={()=>{Toast.default({content:"Default toast" , duration : 3})}} > Default toast  </Button>
            </WingBlank>
            
            <WingBlank>
                <Button type='primary' onPress={()=>{Toast.success({content:"Success toast" , duration : 3})}} > Success toast  </Button>
            </WingBlank>

            <WingBlank>
                <Button type='primary' onPress={()=>{Toast.error({content:"Error toast" , duration : 3})}} > Error toast  </Button>
            </WingBlank>

            <WingBlank>
                <Button type='primary' onPress={()=>{Toast.info({content:"Info toast" , duration : 3})}} > Info toast  </Button>
            </WingBlank>

            <WingBlank>
                <Button type='primary' onPress={()=>{Toast.warning({content:"Warning toast" , duration : 3})}} > Warning toast  </Button>
            </WingBlank>

        </View>
    </ScrollView>
    
  )
}

export default Toasts

const styles = StyleSheet.create({
    container : {
        padding : 10
    }
})