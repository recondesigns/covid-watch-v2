import React from 'react'
import styled from 'styled-components'
import Select from './Select'
import Options from './Options'

const DropdownContainer = styled.div`
    margin: 0px 0px 16px 0px;
    box-sizing: border-box;
    /* border: 2px dashed purple; */
`

export default function Dropdown(props) {
    const { handleClick, placeholder } = props

    return (
        <DropdownContainer>
            <Select handleClick={handleClick} placeholder={placeholder} />
            <Options openStatus={'closed'} />
        </DropdownContainer>
    )
}
