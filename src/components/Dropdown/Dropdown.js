import React, { useState } from 'react'
import styled from 'styled-components'
import Select from './Select'
import Options from './Options'

const DropdownContainer = styled.div`
    margin: 0px 0px 16px 0px;
    box-sizing: border-box;
`

export default function Dropdown(props) {
    const [isOpen, setIsOpen] = useState('closed')
    const { placeholder } = props

    function toggleListDisplay() {
        if (isOpen === 'closed') {
            setIsOpen(() => 'open')
        } else if (isOpen === 'open') {
            setIsOpen(() => 'closed')
        }
    }

    return (
        <DropdownContainer>
            <Select placeholder={placeholder} onClick={() => toggleListDisplay()} iconStatus={isOpen} />
            <Options openStatus={isOpen} />
        </DropdownContainer>
    )
}
