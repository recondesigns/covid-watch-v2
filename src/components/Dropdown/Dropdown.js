import React from 'react'
import styled from 'styled-components'
import ArrowIcon from './ArrowIcon'

const DropdownContainer = styled.div`
    width: 328px;
    height: 40px;
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
        border: 1px dotted dodgerblue;
    }
`

export default function Dropdown() {
    return (
        <DropdownContainer>
            <p>{'Select a state...'}</p>
            <ArrowIcon iconStatus={'down'} />
        </DropdownContainer>
    )
}
