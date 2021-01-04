import React from 'react'
import styled from 'styled-components'
import downArrow from '../../assets/icons/down-icon.svg'

const IconContainer = styled.div`
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dotted dodgerblue;    
`

export default function ArrowIcon() {
    return (
        <IconContainer>
            <img src={downArrow} alt={'Click to see more options.'} />
        </IconContainer>
    )
}
