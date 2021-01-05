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
    const [, setSelectedState] = useContext(AppStateContext)
    const [statesData] = useContext(DataContext)
    const [isOpen, setIsOpen] = useState('closed')
    const { placeholder } = props

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
                const { positiveCasesViral, positiveIncrease, hospitalizedCurrently, hospitalizedIncrease, inIcuCurrently, death, deathIncrease, recovered } = stateEntry
                const newObj = {
                    state: state,
                    positiveCasesViral: positiveCasesViral,
                    positiveIncrease: positiveIncrease,
                    hospitalized: hospitalizedCurrently,
                    hospitalizedIncrease: hospitalizedIncrease,
                    icu: inIcuCurrently,
                    death: death,
                    deathIncrease: deathIncrease,
                    recovered: recovered
                }
                
                setSelectedState(() => {
                    return {...newObj}
                })

                toggleListDisplay()
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
