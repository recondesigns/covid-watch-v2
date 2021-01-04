import React from 'react'
import styled from 'styled-components'

const OptionsContainer = styled.ul`
    margin: 4px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    width: 328px;
    display: ${props => props.display};
    background: #FFFFFF;
    border: 2px solid #303030;
    box-sizing: border-box;
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);

    & > li {
        box-sizing: border-box;
        margin: 4px 0px 4px 0px;
        padding: 0px 16px 0px 16px;
        height: 24px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #808080;
        background: #FFFFFF;
        list-style-type: none;

        &:hover {
            background: #E6E6E6;
            color: #303030;
        }
    }
`

export default function Options(props) {
    const { openStatus } = props

    function setOptionsDisplay(status) {
        if (status === 'closed') {
            return 'none'
        } else if (status === 'open') {
            return 'block'
        }
    }

    let displayValue = setOptionsDisplay(openStatus)

    return (
        <OptionsContainer display={displayValue}>
            <li>Utah</li>
            <li>Texas</li>
            <li>Utah</li>
            <li>Texas</li>
            <li>Utah</li>
            <li>Texas</li>
        </OptionsContainer>
    )
}
