import { StyleSheet } from 'react-native'
import React from 'react'
import { View , ScrollView , Text, Button, WingBlank, Card } from '../../components'

const Cards = () => {
  return (
    <ScrollView  style={styles.container}>
        <View>
            <Text>Cards</Text>
            <WingBlank>
                <Card header="Card Header" headerDivider footer="Card Footer" footerDivider bordered >
                Here we have a card component with dark mode
                </Card>
            </WingBlank>
        </View>
    </ScrollView>
    
  )
}

export default Cards

const styles = StyleSheet.create({
    container : {
        padding : 10
    }
})