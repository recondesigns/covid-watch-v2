import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1`
    border: 1px dotted dodgerblue;
`

export default function LocationHeading(props) {
    const { headingText } = props
    return <StyledH1>{headingText}</StyledH1>
}
