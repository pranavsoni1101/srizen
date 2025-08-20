import { ReactNode } from "react"
import { Button } from "./ui/button"

interface GetInTouchButtonProps {
    text: string,
    icon?: ReactNode,
    className?: string 
}

const GetInTouchButton = ({text, icon, className}: GetInTouchButtonProps) => {
    return(
        <>
            <Button className={className}>
                {icon && icon}
                {text}
            </Button>
        </>
    )
}

export default GetInTouchButton