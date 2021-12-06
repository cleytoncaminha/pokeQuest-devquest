import { createContext } from "react";

export const themes = {
    light: {
        background:'#1D63AB'
    },
    dark:{
        background: '#2E302C'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props)=>{
    return(
        <ThemeContext theme={{themes}}>
            {props.children}
        </ThemeContext>
    )
}