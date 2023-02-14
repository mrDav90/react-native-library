export interface NotificationProps {
    title ?: string ,
    content ?: string ,
    close ?: ()=> void ,
    duration ? : number, 
    type ?:  "default" | "success" | "error" | "warning" | "info"
}