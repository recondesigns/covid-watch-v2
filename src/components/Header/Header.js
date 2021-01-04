import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    border: 1px dotted lightcoral;
`

export default function Header() {
    return (
        <HeaderContainer>
            <p>Header</p>
        </HeaderContainer>
    )
}
