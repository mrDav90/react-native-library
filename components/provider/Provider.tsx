import { StyleSheet, Text, View } from 'react-native'
import React, { createContext } from 'react'
import Portal from '../portal';

interface ProviderProps  {
    theme ?: any,
    children ?: React.ReactNode
}

export const ThemeContext = createContext(null);

const Provider = ({ theme , children} : ProviderProps) => {
  return (
    <View style={styles.container} >
      <ThemeContext.Provider value={theme ? theme : "light"}  >
        <Portal.Host>
            {
                children
            }
        </Portal.Host>     
      </ThemeContext.Provider>
    </View>
  )
}

export default Provider

const styles = StyleSheet.create({
    container : {
        flex: 1
    }
})