import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator , BottomTabBar } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { TabBarProps } from './TabBarProps';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../provider/Provider';
import {Theme} from "./../../components"

const Tab = createBottomTabNavigator();
const TabBar = (tabBarProps : TabBarProps) => {
  const themeContext = useContext(ThemeContext);
  const theme : any = themeContext === "light" && Theme.lightMode || themeContext === "dark" && Theme.darkMode;
  // const screenOptions : any = {
  //   headerTitleAlign : "left",
  //   headerShadowVisible : false ,
  //   headerTitle : ()=> {
  //     return <Text style={{color:theme.principal_color}} > {tabBarProps?.header?.title ? tabBarProps?.header?.title : "App" } </Text>
  //   } ,
  //   headerTitleStyle : {
  //     color :  theme.principal_color
  //   } ,
  //   headerStyle : {
  //     backgroundColor : theme.tab_bg_color ,
  //     borderBottomWidth : 1 ,
  //     borderBottomColor : Theme.colors.divider_color ,
  //   } ,
  //   tabBarShowLabel : true ,
  //   tabBarStyle : {
  //     backgroundColor :  theme.tab_bg_color,
  //     borderTopWidth : 1 ,
  //     borderTopColor : Theme.colors.divider_color
  //   },
  //   tabBarActiveTintColor : theme.principal_color ,
  //   headerRight:()=>{
  //     return ( 
  //         <View>
  //           {
  //             tabBarProps?.header?.headerRight ? tabBarProps?.header?.headerRight : <Text>header right</Text>
  //           }
  //         </View>
  //     )
  //   }
  // };

  const customizeIcon = (focused : boolean , defaultIconName : any , focusedIconName : any ) => {
      return <Ionicons 
          name={ focused ? defaultIconName : focusedIconName}
          size={24}
          color={focused ? "#0097e6" : theme.principal_color }
      />
  }

  const customizeLabel = (focused : boolean , labelText : string) => {
      return <Text style={{color : focused ? "#0097e6" : theme.principal_color}} > {labelText} </Text>
  }
  
  return (
    <View style={styles.container} >
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerTitleAlign : "left",
            headerShadowVisible : true ,
            headerTintColor : "white" ,
            headerShown : tabBarProps.headerShown || true ,
            headerTitle : ()=> {
              return <Text style={{color:theme.principal_color}} > {tabBarProps?.header?.title ? tabBarProps?.header?.title : "App" } </Text>
            } ,
            headerTitleStyle : {
              color :  theme.principal_color
            } ,
            headerStyle : {
              backgroundColor : theme.tab_bg_color ,
              borderBottomWidth : 1 ,
              borderBottomColor : Theme.colors.divider_color ,
            } ,
            tabBarShowLabel : true ,
            tabBarStyle : {
              backgroundColor :  theme.tab_bg_color,
              borderTopWidth : 1 ,
              borderTopColor : Theme.colors.divider_color
            },
            tabBarActiveTintColor : theme.principal_color ,
            headerRight:()=>{
              return ( 
                  <View>
                    {
                      tabBarProps?.header?.headerRight ? tabBarProps?.header?.headerRight : <Text>header right</Text>
                    }
                  </View>
              )
            }
          }}
        >
            {
              tabBarProps?.data?.map((element , key) =>(
                <Tab.Screen
                    key={key}
                    name={element.name}
                    component={element.component}
                    options={{
                        tabBarIcon : ({focused})=>{            
                            return customizeIcon(focused , element.focusedIconName, element.defaultIconName )
                        } ,
                        tabBarLabelStyle : {
                            color : element.tabBarLabelColor ? element.tabBarLabelColor : "#0097e6"
                        } ,
                        tabBarLabelPosition :  element.tabBarLabelPosition ? element.tabBarLabelPosition : "below-icon" ,
                        tabBarLabel : ({focused}) => {
                            return customizeLabel(focused , element.tabBarLabel )
                        }
                        
                    }}     
                /> 
              ))
            }
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default TabBar

const styles = StyleSheet.create({
  container :  {
    flex : 1 ,
    width : "100%"
  }
})