import React from 'react'
import styled from 'styled-components'
import Select from './Select'
import Options from './Options'

const DropdownContainer = styled.div`
    box-sizing: border-box;
    width: 328px;

    /* border: 2px dashed purple; */
`

export default function Dropdown() {

    function handleSelect() {
        alert('fired')
    }

    return (
        <DropdownContainer>
            <Select handleSelect={() => handleSelect()} />
            <Options openStatus={'open'} />
        </DropdownContainer>
    )
}
