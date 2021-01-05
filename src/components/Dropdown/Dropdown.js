import React from 'react'
import styled from 'styled-components'
import Select from './Select'
import Options from './Options'

const DropdownContainer = styled.div`
    margin: 0px 0px 16px 0px;
    box-sizing: border-box;
`

export default function Dropdown(props) {
    const { placeholder, list } = props

    return (
        <DropdownContainer>
            <Select placeholder={placeholder} />
            <Options openStatus={'open'} list={list} />
        </DropdownContainer>
    )
}
