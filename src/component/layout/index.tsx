import { AppNav } from "../appNav"

export const MovieAppShell = ({children}:{children: any}) =>{
    return(
        <div>
            <AppNav />
            {children}
        </div>
    )
}