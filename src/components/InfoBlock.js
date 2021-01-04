import React from 'react'
import styled from 'styled-components'

const BlockContainer = styled.div`
    box-sizing: border-box;
    width: 120px;

    @media (min-width: 768px) {
        width: 152px;
    }

    & > h5 {
        box-sizing: border-box;
        margin: 0px;
        width: 100%;
        height: 24px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #303030;
        text-transform: uppercase;

        @media (min-width: 768px) {
            font-size: 20px;
            line-height: 24px;
        }
    }

    & > h4 {
        box-sizing: border-box;
        margin: 8px 0px 4px 0px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #303030;

        @media (min-width: 768px) {
            font-size: 24px;
            margin: 8px 0px 8px 0px;
        }
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

        @media (min-width: 768px) {
            font-size: 16px;
            line-height: 16px;
        }
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
