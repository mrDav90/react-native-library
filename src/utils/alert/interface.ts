export interface AlertCustProps {
    title ? : string ,
    message ?: string , 
    icon ?: JSX.Element ,
    onValid ?: ()=> void ,
    onCancel ?: ()=> void ,
    validText ?: string ,
    cancelText ?: string
    

} 