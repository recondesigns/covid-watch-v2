import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1`
    margin: 0px;
    width: 328px;
    height: 80px;
    position: absolute;
    top: 128px;
    left: calc(50% - 328px/2);
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: #303030;
    /* border: 1px dotted dodgerblue; */

    @media (min-width: 768px) {
        width: 400px;
        position: absolute;
        top: 144px;
        left: calc(50% - 400px/2);
        font-size: 40px;
    }
`

export default function LocationHeading(props) {
    const { headingText } = props

    return <StyledH1>{headingText}</StyledH1>
}
