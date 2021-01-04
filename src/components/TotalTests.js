import React from 'react'
import styled from 'styled-components'

const TestsContainer = styled.div`
    margin: 0px;
    border: 1px dashed orange;

    & > h3 {
        margin: 0px;
        width: 328px;
        height: 32px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #303030;
        border: 1px dotted dodgerblue;
    }

    & > h2 {
        margin: 0px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #303030;
        border: 1px dotted dodgerblue;
    }

    & > p {
        margin: 0px;
        width: 328px;
        height: 16px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 16px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #303030;
        border: 1px dotted dodgerblue;
    }
`

export default function TotalTests(props) {
    const { number, numberIncrease } = props

    return (
        <TestsContainer>
            <h3>{'Total positive viral tests'}</h3>
            <h2>{number}</h2>
            <p>{`+ ${numberIncrease}`}</p>
        </TestsContainer>
    )
}
