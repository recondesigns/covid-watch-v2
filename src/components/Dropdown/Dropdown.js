import React, { useContext } from 'react'
import styled from 'styled-components'
import { DataContext } from '../../providers/Data'
import Select from './Select'
import Options from './Options'

const DropdownContainer = styled.div`
    margin: 0px 0px 16px 0px;
    box-sizing: border-box;
`

export default function Dropdown(props) {
    const [statesData] = useContext(DataContext)
    const { handleClick, placeholder, list } = props
    // console.log(list)





    // let tempName = statesData.map((stateEntry) => {
        
    //     const { state } = stateEntry
    //     return state
    // })
    
    // console.log(tempName)





    


    return (
        <DropdownContainer>
            <Select handleClick={handleClick} placeholder={placeholder} />
            <Options openStatus={'open'} list={list} />
        </DropdownContainer>
    )
}
