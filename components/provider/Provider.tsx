import { StyleSheet, Text, View } from 'react-native'
import React, { createContext } from 'react'
import Portal from '../portal';
import { Theme } from '..';

interface ProviderProps  {
    theme ?: "light" | "dark",
    children ?: React.ReactNode
}

export const ThemeContext = createContext(null);

const Provider = ({ theme , children} : ProviderProps) => {
  const themeValue : any = theme === "light" && Theme.lightMode || theme === "dark" && Theme.darkMode
  return (
    <View style={styles.container} >
      <ThemeContext.Provider value={themeValue || Theme.lightMode}  >
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