import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export const UseTheme=()=>{
    return useContext(ThemeContext)
}