import React from "react"
import Portal from "../portal"
import { ToastProps } from "./interface"
import Toast from "./Toast"

const show = ( toastProps : ToastProps  ) => {
    const toast = <Toast 
                    content={toastProps.content}
                    type={ toastProps.type}
                />
    return Portal.add(toast);
}

export default {
    info : ( object : ToastProps ) => {
        object.type="info"
        let key = show(object)
        setTimeout(() => {
            Portal.remove(key)
        },  (object.duration ? object.duration * 1000 : 2000) );
    } ,
    success : ( object : ToastProps ) => {
        object.type="success"
        let key = show(object)
        setTimeout(() => {
            Portal.remove(key)
        },  (object.duration ? object.duration * 1000 : 2000) );
    } ,
    error : ( object : ToastProps ) => {
        object.type="error"
        let key = show(object)
        setTimeout(() => {
            Portal.remove(key)
        },  (object.duration ? object.duration * 1000 : 2000) );
    } ,
    warning : ( object : ToastProps ) => {
        object.type="warning"
        let key = show(object)
        setTimeout(() => {
            Portal.remove(key)
        },  (object.duration ? object.duration * 1000 : 2000) );
    } ,
}