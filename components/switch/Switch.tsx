import { StyleSheet, Switch, SwitchProps , Text, View } from 'react-native'
import React from 'react'
import { Theme } from '..'

interface SwitchCusProps extends SwitchProps {
    color ?: string
}

const SwitchCus = ( switchCusProps : SwitchCusProps) => {
  return (
    <View>
      <Switch {...switchCusProps} trackColor={{true : switchCusProps.color ? switchCusProps.color : Theme.colors.primary_color  }} />
    </View>
  )
}

export default SwitchCus

const styles = StyleSheet.create({})