import React from 'react'
import styled from 'styled-components'
import ArrowIcon from './ArrowIcon'

const SelectContainer = styled.div`
    box-sizing: border-box;
    padding: 8px 16px 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    border: 2px solid #303030;
    box-sizing: border-box;

    & > p {
        margin: 0px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #303030;
    }
`

export default function Select(props) {
    const { placeholder, onClick, iconStatus } = props

    function setIcon(status) {
        if (status === 'closed') {
            return 'down'
        } else if (status === 'open') {
            return 'up'
        }
    }

    let correctIcon = setIcon(iconStatus)

    return (
        <SelectContainer onClick={onClick}>
            <p>{placeholder}</p>
            <ArrowIcon iconStatus={correctIcon} />
        </SelectContainer>
    )
}
