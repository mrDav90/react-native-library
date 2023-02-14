import Portal from "../portal";
import AlertCust from "./AlertCust";
import { AlertCustProps } from "./interface";

const alert = (props : AlertCustProps) => {
    const key = Portal.add(
        <AlertCust 
            title={props.title}
            message={props.message}
            icon={props.icon}
            onValid={props.onValid}
            onCancel={()=>{Portal.remove(key)}}
            cancelText={props.cancelText}
            validText={props.validText}
        />
    )
    return key ;
}
export default {
    show : ( props : AlertCustProps ) => {
        alert(props) ; 
    } ,
}