import React from 'react'
import styled from 'styled-components'

const BlockContainer = styled.div`
    box-sizing: border-box;
    width: 120px;
    border: 1px dashed orange;

    & > h5 {
        box-sizing: border-box;
        margin: 0px;
        width: 100%;
        height: 16px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #303030;
        text-transform: uppercase;
        border: 1px dotted dodgerblue;
    }

    & > h4 {
        box-sizing: border-box;
        margin: 0px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #303030;
        border: 1px dotted dodgerblue;
    }

    & > p {
        box-sizing: border-box;
        margin: 0px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 14px;
        display: flex;
        align-items: center;
        color: #303030;
        border: 1px dotted dodgerblue;
    }
`

export default function InfoBlock(props) {
    const { label, number, numberChange } = props

    return (
        <BlockContainer>
            <h5>{label}</h5>
            <h4>{number}</h4>
            <p>{`+ ${numberChange}`}</p>
        </BlockContainer>
    )
}
