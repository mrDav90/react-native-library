import { Platform } from "react-native";

export const COLORS = {
    primary_color : Platform.OS === "ios" ? "#007AFF" : "#3498db",
    divider_color : "rgba(160, 170, 166, 0.16)",
    default_color : "#bdc3c7" ,
} 