import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { AlertCust, Notification, Toast } from '../utils';
import { message } from '../func';

const Home = () => {
    const currentMode = useSelector((state)=>state.themeRdx.currentMode);
    const styles = StyleSheet.create({
        wrapper : {
            backgroundColor : currentMode.principalBgColor
        } ,
        container : {
            flex : 1
        } ,
    })
    const success = () => {
        Toast.success({content:"  Here we are a success toast" , duration : 3})
    }

    const alert = () => {
    AlertCust.show({
        title : "Etes-vous sur ?" ,  
        message : "Vous pouvez plus revenir en arrière" ,
        validText : "Valider" ,
        onValid : ()=>{
        console.log("Top")
        } ,
        //icon : <Ionicons name="checkmark-circle-outline" size={72} color="black" />
    })
    }

    const notification = () => {
    Notification({
        content : "Hello" ,
        title : "Title here",
        
    })
    }

    useEffect(()=>{
    message()
    },[])
    return (
        <ScrollView style={styles.wrapper} >
            <View style={styles.container} >
                <Text>Home</Text>
                <Button onPress={success} title="success"  /> 
                <Button onPress={alert} title="Alert Test"  /> 
                <Button onPress={notification} title="Notification test"  /> 
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})