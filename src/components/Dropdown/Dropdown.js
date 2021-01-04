import React from 'react'
import styled from 'styled-components'

const DropdownContainer = styled.div`
    border: 1px dashed orange;
`

export default function Dropdown() {
    return (
        <DropdownContainer>
            <p>Dropwdown</p>
        </DropdownContainer>
    )
}
