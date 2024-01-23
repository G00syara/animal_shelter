import styled from "@emotion/styled"
import { FC } from "react"

interface BaseDivWrapperProps {
    children?: React.ReactElement
}

export const BaseDivWrappser:FC <BaseDivWrapperProps> = ({children}) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display: flex;    
    align-items: center;
    justify-content: center;
`