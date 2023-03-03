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
            if (state.isChecked === true) {
                state.theme = "dark";
            }
            else {
                state.theme = "light";
            }
        }
    }
})

export const {setTheme , setChecked} = themeSlice.actions
export default themeSlice.reducer