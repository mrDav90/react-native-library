import { StyleSheet, Text, View } from 'react-native'
import React, { createContext } from 'react'

interface ProviderProps  {
    theme ?: any,
    children ?: React.ReactNode
}

export const ThemeContext = createContext(null);

const Provider = ({ theme , children} : ProviderProps) => {
  return (
    <View style={styles.container} >
      <ThemeContext.Provider value={theme ? theme : "light"}  >
            {
                children
            }
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