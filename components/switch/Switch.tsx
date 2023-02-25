import { StyleSheet, Switch, SwitchProps , Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../colors'


interface SwitchCusProps extends SwitchProps {
    color ?: string
}

const SwitchCus = ( switchCusProps : SwitchCusProps) => {
  return (
    <View>
      <Switch {...switchCusProps} trackColor={{true : switchCusProps.color ? switchCusProps.color : COLORS.primary_color  }} />
    </View>
  )
}

export default SwitchCus

const styles = StyleSheet.create({})