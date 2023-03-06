import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { View , ScrollView , Text, WingBlank, Input, Button } from '../../components';
import EmojiPicker from 'rn-emoji-keyboard';

const Inputs = () => {
    const [isOpen , setIsOpen] = useState(false);
    const handlePick = (emojiObject: any) => {
        console.log(emojiObject)
        /* example emojiObject = {
            "emoji": "❤️",
            "name": "red heart",
            "slug": "red_heart",
            "unicode_version": "0.6",
          }
        */
      }
    return (
        <ScrollView  style={styles.container}>
            <View>
                <Text>Inputs</Text>
                <WingBlank>
                    <Input placeholder='Email' /*onChangeText={(value : any)=>{console.log(value)}}*/ prefixIconName='mail-outline' label='Email'  />
                    <Input prefixIconName='lock-closed-outline' label='Mot de passe' outline type='password' />    
                </WingBlank>
                <WingBlank>
                    <Button
                    onPress={()=>{setIsOpen(true)}}
                    > Open Emoji</Button>
                    <EmojiPicker onEmojiSelected={handlePick} open={isOpen} onClose={() => setIsOpen(false)} 
                        theme={{
                            backdrop: '#16161888',
                            container: '#282829',
                            header: '#fff',
                            skinTonesContainer: '#252427',
                            category: {
                                icon: '#766dfc',
                                iconActive: '#fff',
                                container: '#252427',
                                containerActive: '#766dfc',
                            },
                        }}
                    />
                </WingBlank>
            </View>
        </ScrollView>
        
    )
}

export default Inputs

const styles = StyleSheet.create({
    container : {
        padding : 10
    }
})