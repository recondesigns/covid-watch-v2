import React from 'react'
import styled from 'styled-components'
import downArrow from '../../assets/icons/down-icon.svg'
import upArrow from '../../assets/icons/up-icon.svg'

const IconContainer = styled.div`
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function ArrowIcon(props) {
    const { iconStatus } = props

    function setIcon(status) {
        if (status === 'down') {
            return <img src={downArrow} alt={'Click to see more options.'} />
        } else if (status === 'up') {
            return <img src={upArrow} alt={'Click to close options.'} />
        }
    }

    return (
        <IconContainer>
            {setIcon(iconStatus)}
        </IconContainer>
    )
}
