import React from "react"

export interface TabBarProps {
    header ?: headerProps ,
    data ?: itemProps[]
}

interface headerProps {
    title ?:string ,
    headerRight?: React.ReactNode
}

interface itemProps {
    name ?: string | any
    component ?: React.ReactNode | any ,
    defaultIconName ?: string | any ,
    focusedIconName ?: string | any ,
    tabBarLabel ?: string | any ,
    tabBarLabelPosition ?: string | any ,
    tabBarLabelColor ?: string | any
}