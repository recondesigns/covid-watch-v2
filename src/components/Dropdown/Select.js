import React from 'react'
import styled from 'styled-components'
import ArrowIcon from './ArrowIcon'


const SelectContainer = styled.div`
    box-sizing: border-box;

    padding: 8px 16px 8px 16px;
    /* height: 40px; */
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
        /* border: 1px dotted dodgerblue; */
    }
`

export default function Select(props) {
    const { handleClick, placeholder } = props

    return (
        <SelectContainer onClick={handleClick}>
            <p>{placeholder}</p>
            <ArrowIcon iconStatus={'down'} />
        </SelectContainer>
    )
}
