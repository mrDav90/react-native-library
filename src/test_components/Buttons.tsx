import { StyleSheet } from 'react-native'
import React from 'react'
import { View , ScrollView , Text, Button, WingBlank } from '../../components'

const Buttons = () => {
  return (
    <ScrollView  style={styles.container}>
        <View>
            <Text>Buttons</Text>
            <WingBlank>
                <Button > Default  </Button>
            </WingBlank>
            
            <WingBlank>
                <Button type='primary' > Primary  </Button>
            </WingBlank>

            <WingBlank>
                <Button type="outline"  > Outline  </Button>
            </WingBlank>

            <WingBlank>
                <Button style={{backgroundColor : "red"} as any} > Customized  </Button>
            </WingBlank>

            <WingBlank>
                <Button style={{backgroundColor : "green" , width : 200} as any} > Update width  </Button>
            </WingBlank>
        </View>
    </ScrollView>
    
  )
}

export default Buttons

const styles = StyleSheet.create({
    container : {
        padding : 10
    } ,
  
})