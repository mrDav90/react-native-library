import Portal from "../portal";
import Notification from "./Notification";
import { NotificationProps } from "./interface";

const show = (props : NotificationProps) => {
    const key = Portal.add(
        <Notification 
            title={props.title}
            content={props.content}
            type={props.type}
            close={()=>{Portal.remove(key)}}
        />
    )
    return key ;
}
export default (props : NotificationProps) => {
    const key = show(props);
    setTimeout(() => {
        Portal.remove(key)
    }, 15000);
}