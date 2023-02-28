import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeContext } from '../provider/Provider';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types';
const Stack = createNativeStackNavigator();

interface NavigationProps {
    screens ?: ScreensProps[]
}

interface ScreensProps  {
    headerShown ?: boolean ,
    name ?: string ,
    component ?: any
}

const Navigation = (props : NavigationProps ) => {
    const theme: any = useContext(ThemeContext);
    const stackScreen = (name : any , component  : any , headerShown : boolean) => {
        return (
            <Stack.Screen 
                name={name} 
                component={component} 
                options={{
                    headerShown : headerShown ,
                    headerStyle : {
                        backgroundColor :  theme.principal_bg_color ,              
                    }  ,
    
                    headerTitleStyle : {
                        color : theme.principal_color ,                        
                    },
                    headerBackTitleVisible : false ,
                    headerTintColor : theme.principal_color ,
                    
                }} 
            />
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    props.screens?.map((item , id)=>(
                        <Stack.Screen 
                            key={id}
                            name={item.name as any} 
                            component={item.component} 
                            options={{
                                headerShown : item.headerShown ,
                                headerStyle : {
                                    backgroundColor :  theme.screen_header_color ,             
                                }  ,
                
                                headerTitleStyle : {
                                    color : theme.principal_color ,                        
                                },
                                headerBackTitleVisible : false ,
                                headerTintColor : theme.principal_color ,
                                
                            }} 
                        />
                    ))
                }
                {/* {stackScreen('TabBar',TabBar , false)} 
                {stackScreen('Sign', Sign , false)}                                               
                {stackScreen('Search', Search , true)}                                               
                {stackScreen('Shop', Shop , false)}                                               
                {stackScreen('ExploreRestaurant', ExploreRestaurant , false)}                                                */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})