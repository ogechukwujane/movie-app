import { AppNav } from ".."

export const MovieAppShell = ({children}:{children: any}) =>{
    return(
        <div>
            <AppNav />
            {children}
        </div>
    )
}