import { StyleSheet } from 'react-native'
import React from 'react'
import { View , ScrollView , Text, Button, WingBlank, Chip } from '../../components'

const Chips = () => {
  return (
    <ScrollView  style={styles.container}>
        <View>
            <Text>Chips</Text>
            <WingBlank>
                <Chip text="Chip" type='warning' size='sm' outline />
            </WingBlank>

            <WingBlank>
                <Chip text="Chip" iconName="checkmark" type='success' outline />
            </WingBlank>
            <WingBlank>
                <Chip text="Chip" type='error' outline size='lg' />
            </WingBlank>
            
            <WingBlank>
                <Chip text="Chip" />
            </WingBlank>
            
        </View>
    </ScrollView>
    
  )
}

export default Chips

const styles = StyleSheet.create({
    container : {
        padding : 10
    }
})