import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator , BottomTabBar } from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { setNavigation } from '../reducers/navigation.reducers';
import Home from '../components/Home';
import Settings from '../components/Settings';
import { colors } from '../utils/colors/colors.utils';
import TextCust from '../utils/text';

const Tab = createBottomTabNavigator();

const TabBar = ({ navigation }) => {
    const dispatch = useDispatch();
    const currentMode = useSelector((state)=>(state.themeRdx.currentMode));
    const screenOptions = {
        headerTitleAlign : "left",
        headerTitle : ()=> {
        return <TextCust content={"App"} />
        } ,
        headerTitleStyle : {
        color :  currentMode.principalColor
        } ,
        headerStyle : {
        backgroundColor : currentMode.principalBgColor ,
        } ,
        tabBarShowLabel : true ,
        tabBarStyle : {
        backgroundColor :  currentMode.principalBgColor ,
        },
        tabBarActiveTintColor : currentMode.principalColor ,
        headerRight:()=>{
        return ( 
            <View style={{display:'flex',flexDirection:"row",alignItems:'center',width: "auto" ,justifyContent: "space-between" ,marginRight:15}} >
                <Pressable>
                    <Ionicons name='search-outline' size={24} color={currentMode.principalColor}  />
                </Pressable>
            </View>
        )
        }
    } ;

    const customizeIcon = (focused , iconName1 , iconName2  ) => {
        return <Ionicons 
            name={ focused ? iconName1 : iconName2}
            size={24}
            color={focused ? colors.appColor :  currentMode.principalColor }
        />
    }

    const customizeLabel = (focused , labelText) => {
        return <TextCust content={labelText} color={focused?colors.appColor : currentMode.principalColor} /> /**focused?colors.appColor : currentMode.principalColor */  
    }

    const handleNavigation = () => {
        return  navigation ;
    }

    const styles = StyleSheet.create({})

    useEffect(()=>{
        dispatch(setNavigation(handleNavigation()))
    } , [])
    return (
        <Tab.Navigator
        screenOptions={screenOptions}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon : ({focused})=>{            
                        return customizeIcon(focused , "home" , "home-outline" )
                    } ,
                    tabBarLabelStyle : {
                        color : colors.appColor
                    } ,
                    tabBarLabelPosition :  "below-icon" ,
                    tabBarLabel : ({focused}) => {
                        return customizeLabel(focused , "Accueil")
                    }
                    
                }}
                
            /> 

            

            <Tab.Screen
                name='Settings'
                component={Settings}
                options={{
                    tabBarIcon : ({focused})=>{            
                        return customizeIcon(focused , "settings" , "settings-outline"  )
                    },
                    tabBarLabel : ({focused}) => {
                    return customizeLabel(focused , "Paramètres")
                    }
                }}
            /> 

        

        </Tab.Navigator>
    )
}

export default TabBar

