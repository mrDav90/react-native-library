import React from 'react'
import { KeyboardTypeOptions, StyleProp, ViewStyle } from 'react-native'
export type InputEventHandler = (value?: string) => void

export interface InputProps {
  type?:
    | 'text'
    | 'bankCard'
    | 'phone'
    | 'password'
    | 'number'
    | 'digit'
    | KeyboardTypeOptions
  editable?: boolean ,
  outline ?: boolean ,
  label ?: string ,
  disabled?: boolean
  name?: string
  value?: string
  defaultValue?: string
  placeholder?: string
  clear?: boolean
  maxLength?: number
  extra?: React.ReactNode
  error?: boolean
  // can not find out where it used
  // onErrorPress?: Function;
  // size?: 'large' | 'small';
  labelNumber?: number
  labelPosition?: 'left' | 'top'
  textAlign?: 'left' | 'center' | 'right'
  updatePlaceholder?: boolean
  locale?: object
  onChange?: (value: string) => void
  onFocus?: InputEventHandler
  onBlur?: InputEventHandler ,
  onChangeText ?: InputEventHandler,
  onVirtualKeyboardConfirm?: InputEventHandler
  children?: React.ReactNode ,
  style ?: StyleProp<ViewStyle> ,
  prefixIconName ?: string
}