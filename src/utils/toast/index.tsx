import { Alert } from "react-native"
import Portal from "../portal"
import Toast from "./Toast"


const show = ( content : string , type ?: string ) => {
    const key = <Toast 
                    content={content}
                    type={type}
                />
            
    return Portal.add(key);
}

const showToastType = () => {}

export default {
    info : ( content : string , duration? : number ) => {
        let key = show(content , "info")
        setTimeout(() => {
            Portal.remove(key)
        },  (duration ? duration * 1000 : 2000) );
    } ,
    success : ( content : string , duration? : number ) => {
        let key = show(content , "success")
        setTimeout(() => {
            Portal.remove(key)
        },  (duration ? duration * 1000 : 2000) );
    } ,
    error : ( content : string , duration? : number ) => {
        let key = show(content , "error")
        setTimeout(() => {
            Portal.remove(key)
        },  (duration ? duration * 1000 : 2000) );
    } ,
    warning : ( content : string , duration? : number ) => {
        let key = show(content , "warning")
        setTimeout(() => {
            Portal.remove(key)
        },  (duration ? duration * 1000 : 2000) );
    } ,
}