import { ReactNode } from "react";

export interface ModalProps {
    isVisible ?: boolean , 
    setIsVisible ?: any ,
    content ?: ReactNode ,
    enablePanDownToClose ?: boolean ,
    points ?: [] ,
    fullScreen ?: boolean
}