import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name  : "theme" ,
    initialState : {
        theme : "light" ,
        isChecked : false
    } ,
    reducers : {
        setTheme : (state , action)=>{
            state.theme = action.payload   
        } ,
        setChecked : (state , action) => {
            state.isChecked = action.payload
        }
    }
})

export const {setTheme , setChecked} = themeSlice.actions
export default themeSlice.reducer