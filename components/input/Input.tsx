import { Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../provider/Provider'
import { InputProps } from './PropsType';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../colors';
import { Text } from '..';


const Input = (inputProps : InputProps) => {
    const theme : any = useContext(ThemeContext);
    const [isHide , setIsHide] = useState(true);
    const [focusedColor , setFocusedColor] = useState(theme.input_border_color);
    const [labelTop , setLabelTop] = useState(60);
    const [labelSize , setLabelSize] = useState(16);
    const handleFocus =() => {
        setFocusedColor(COLORS.primary_color);
        setLabelTop(40);
        setLabelSize(14);
    }

    const handleOnEndEditing = (e : any) => {
        const inputValue =  e.nativeEvent.text  ;
        setFocusedColor(theme.input_border_color);
        if (inputValue !== "") {
            setLabelTop(40);
            setLabelSize(14);    
        }
        else{
            setLabelTop(60);
            setLabelSize(16);  
        }
    }




    const styles = StyleSheet.create({
        container : {
            width :  "100%",
            display:'flex',
            justifyContent:'flex-start',
            alignItems:'center' , 
            flexDirection : "row" ,
            borderWidth : inputProps.outline ? 0 : 1 ,
            borderBottomWidth : inputProps.outline && 1 as any ,
            borderColor : focusedColor ,
            borderRadius : inputProps.outline ? 0 : 5 ,
            height : 42 ,
            //backgroundColor : "rgba(102, 110, 110, 0.06)" ,
            marginTop : 0 ,
            marginBottom : 0 ,
        } ,
        input :  {
            borderWidth : 0 ,
            paddingLeft : inputProps.prefixIconName ? 40 : 15 ,
            width : inputProps.type === "password" ?  "85%" : "100%",
            height : "100%" ,
            color : theme.principal_color ,
            position : "absolute",
            zIndex : 5555 ,
            marginRight : 10 ,
            fontSize : 16
        } ,

        suffixIconContainer : {
            width : "15%" ,
            height : "100%",
            // borderWidth : 1 ,
            // borderColor : "black",
            position :"absolute",
            zIndex : 9999999 ,
            right : 0 ,
            display:'flex',
            justifyContent:"center",
            alignItems:"center"
        } ,
        suffixIcon : {
            width : "100%",
            height : "100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }

    })
    return (
        <View style={{marginVertical : 15}}>
            {
                inputProps.label &&
                <View
                    style={[
                        {
                            position : "absolute",
                            top : labelTop ,
                            left : 0  ,
                            backgroundColor : theme.principal_bg_color , 
                            zIndex : 1
                        },
                        {
                            transform: [{translateY: -50}, {translateX : 32}],
                        },
                    ]}
                >
                    <Text style= {{fontSize : labelSize }} >
                        {inputProps.label}
                    </Text>
                </View>
            }
            <View style={StyleSheet.compose(styles.container, inputProps.style as any)} >
                { inputProps.prefixIconName &&
                    <Ionicons style={{marginLeft : 10}} name={inputProps.prefixIconName as any} size={18} color={"#bdc3c7"} />
                }
                
                <TextInput 
                    value={inputProps.value}
                    defaultValue={inputProps.defaultValue}
                    placeholder={ inputProps.label ? null : inputProps.placeholder as any}
                    textAlign={inputProps.textAlign}
                    onChange={inputProps.onChange as any}
                    onChangeText={inputProps.onChangeText as any} 
                    onFocus={ handleFocus || inputProps.onFocus as any}
                    // onBlur={handleBlur || inputProps.onBlur as any }
                    secureTextEntry={inputProps.type==="password"&& isHide}
                    style={styles.input}
                    onEndEditing={handleOnEndEditing}

                />

                {
                    inputProps.type === "password" && 
                    ( 
                        <View style={styles.suffixIconContainer} >
                            {isHide ? 
                            <Pressable style={styles.suffixIcon} onPress={()=>setIsHide(!isHide)} >
                                <Ionicons name='eye-off' size={24} color={theme.principal_color} />
                            </Pressable>                             
                            :
                            <Pressable style={styles.suffixIcon} onPress={()=>setIsHide(!isHide)}>
                                <Ionicons name='eye' size={24} color={theme.principal_color} />
                            </Pressable>  } 
                        </View>
                    )
                }
                
            </View>
        </View>  
    )
}

export default Input

const styles = StyleSheet.create({})