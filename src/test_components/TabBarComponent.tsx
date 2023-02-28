import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TabBar } from '../../components'
import { Ionicons } from '@expo/vector-icons'
import Home from './Home'
import Settings from './Settings'

const TabBarComponent = () => {
  return (
    
      <TabBar 
              header={{
                title : "MyApp" ,
                headerRight : <Text> <Ionicons name='search-outline' size={24} /> </Text>
              }}
              headerShown
              data={
                [
                  {
                    name : "Home" ,
                    component : Home ,
                    defaultIconName : "home-outline" ,
                    focusedIconName : "home" ,
                    tabBarLabel : "Home" ,
    
                  } ,
                  {
                    name : "Settings" ,
                    component : Settings ,
                    defaultIconName : "settings-outline" ,
                    focusedIconName : "settings" ,
                    tabBarLabel : "Settings" ,
    
                  } ,
                ]
              }
        />
    
  )
}

export default TabBarComponent

const styles = StyleSheet.create({})