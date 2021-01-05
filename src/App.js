import React, { useContext } from 'react'
import styled from 'styled-components'
import { DataContext } from './providers/Data'
import { AppStateContext } from './providers/AppState'
import { Header } from './components/Header'
import LocationHeading from './components/LocationHeading'
import TotalTests from './components/TotalTests'
import InfoBlock from './components/InfoBlock'
import { Dropdown } from './components/Dropdown'

const AppContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  position: relative;

  & > .row-wrapper-one {
    width: 280px;
    position: absolute;
    top:424px;
    left: calc(50% - 280px/2);
    display: flex;
    justify-content: space-between;

    @media (min-width: 768px) {
      width: 400px;
      top: 464px;
      left: calc(50% - 400px/2);
    }
  }

  & > .row-wrapper-two {
    width: 280px;
    position: absolute;
    top:526px;
    left: calc(50% - 280px/2);
    display: flex;
    justify-content: space-between;

    @media (min-width: 768px) {
      width: 400px;
      top: 560px;
      left: calc(50% - 400px/2);
    }
  }

  & > .dropdown-wrapper {
    width: 328px;
    position: absolute;
    top: 656px;
    left: calc(50% - 328px/2);

    @media (min-width: 768px) {
      top: 664px;
    }
  }
`

function App() {
  
  const [statesData] = useContext(DataContext)
  // console.log(useContext(AppStateContext))
  // console.log(useContext(DataContext))


  const list = []

  if (statesData !== null) {
    statesData.forEach((stateEntry) => {
      const { state } = stateEntry
      list.push(state)
    })
  }

  return (
    <AppContainer>
      <Header />
      <LocationHeading headingText={'Salt Lake County, Utah'} />
      <TotalTests number={'999,888,999'} numberChange={'999,888,999'} />
      
      <div className={'row-wrapper-one'}>
        <InfoBlock label={'Label'} number={'999,888,999'} numberChange={'999,999,000'} />
        <InfoBlock label={'Label'} number={'999,888,999'} numberChange={'999,999,000'} />
      </div>

      <div className={'row-wrapper-two'}>
        <InfoBlock label={'Label'} number={'999,888,999'} numberChange={'999,999,000'} />
        <InfoBlock label={'Label'} number={'999,888,999'} numberChange={'999,999,000'} />
      </div>

      <div className={'dropdown-wrapper'}>
        <Dropdown placeholder={'Select a state...'} list={list} />
      </div>

    </AppContainer>
  )
}

export default App;
