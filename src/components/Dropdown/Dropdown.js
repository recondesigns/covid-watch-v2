import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { DataContext } from '../../providers/Data'
import { AppStateContext } from '../../providers/AppState'
import Select from './Select'
import Options from './Options'

const DropdownContainer = styled.div`
    margin: 0px 0px 16px 0px;
    box-sizing: border-box;
`

export default function Dropdown(props) {
    const [selectedState, setSelectedState] = useContext(AppStateContext)
    const [statesData] = useContext(DataContext)
    const [isOpen, setIsOpen] = useState('closed')
    const { placeholder } = props

    // console.log(selectedState)

    function toggleListDisplay() {
        if (isOpen === 'closed') {
            setIsOpen(() => 'open')
        } else if (isOpen === 'open') {
            setIsOpen(() => 'closed')
        }
    }

    function handleItemClick(e) {
        statesData.forEach((stateEntry) => {
            const { state } = stateEntry
            if (state === e.target.id) {
                const { positiveCasesViral, positiveIncrease } = stateEntry
                const newObj = {
                    state: state,
                    positiveCasesViral: positiveCasesViral,
                    positiveIncrease: positiveIncrease
                }
                
                setSelectedState(() => {
                    return {...newObj}
                })
            }
        })
    }

    return (
        <DropdownContainer>
            <Select placeholder={placeholder} onClick={() => toggleListDisplay()} iconStatus={isOpen} />
            <Options openStatus={isOpen} onClick={(e) => handleItemClick(e)} />
        </DropdownContainer>
    )
}
