import { Platform } from "react-native";

export const COLORS = {
    primary_color : Platform.OS === "ios" ? "#007AFF" : "#3498db",
    divider_color : "rgba(160, 170, 166, 0.16)",
    default_color : "#bdc3c7" ,
    success_color : "#44bd32" ,
    success_bg_color : "#effcf4" ,
    error_color : "red",
    error_bg_color : "#fdf0f2" ,
    warning_color : "#fbc531" ,
    warning_bg_color : "#fffaec" ,
    info_color : "#3498db" ,
    info_bg_color : "#eff5ff",
    question_color : "#3498db" ,
} 