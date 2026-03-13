import { Moon, Sun } from "lucide-react";
import { UseTheme } from "../context/useTheme.jsx";

export default function Header(){
    const {dark,setDark}=UseTheme()
    return(
        <div className={`flex justify-between p-4 items-center border-b border-orange-300 ${dark?"text-white bg-black":"text-black bg-white"}`}>
            <div>
                <h2 className="text-orange-500">Recipe Craft</h2>
                <h3>Discover & Save Recipes</h3>
            </div>
            
            <div className="mr-5">
                <button onClick={()=>{setDark(!dark)}} className="cursor-pointer">{dark?<Sun/>:<Moon/>}</button>
            </div>
        </div>

    )
}