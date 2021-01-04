import React from 'react'
import styled from 'styled-components'
import Select from './Select'

const DropdownContainer = styled.div`
    box-sizing: border-box;
    width: 328px;

    border: 2px dashed purple;
`

export default function Dropdown() {
    return (
        <DropdownContainer>
            <Select />
        </DropdownContainer>
    )
}
