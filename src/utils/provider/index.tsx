import { View } from 'react-native'
import React, { ReactNode } from 'react'
import Portal from "../portal";

interface ProviderProps {
    children ? : ReactNode
}

const UtilsProvider = ( providerProps : ProviderProps )  => {
  return (
    <View style={{flex : 1}} >
        <Portal.Host>
            {providerProps.children}
        </Portal.Host>
    </View>
  )
}

export default UtilsProvider

