import { createSlice } from "@reduxjs/toolkit";
import { theme } from "../constants/theme/theme.utils";

export const themeSlice = createSlice({
    name  : "theme" ,
    initialState : {
        currentMode : theme.lightMode ,
        isChecked : false
    } ,
    reducers : {
        setTheme : (state , action)=>{
            state.currentMode = action.payload   
        } ,
        setChecked : (state , action) => {
            state.isChecked = action.payload
        }
    }
})

export const {setTheme , setChecked} = themeSlice.actions
export default themeSlice.reducer