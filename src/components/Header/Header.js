import React from 'react'
import styled from 'styled-components'
import menuIcon from '../../assets/icons/menu-icon.svg'
import userIcon from '../../assets/icons/user-icon.svg'


const HeaderContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px dotted lightcoral; */

    & > .menu-icon-container {
        margin: 0px 16px 0px 16px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        & > img {
            width: 100%;
            height: 100%;
        }
    }

    & > .user-icon-container {
        margin: 0px 16px 0px 16px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        & > img {
            width: 100%;
            height: 100%;
        }
    }
`

export default function Header() {
    return (
        <HeaderContainer>
            <div className={'menu-icon-container'}>
                <img src={menuIcon} alt={'Open menu'} />
            </div>

            <div className={'user-icon-container'}>
                <img src={userIcon} alt={'User profile'} />
            </div>
        </HeaderContainer>
    )
}
