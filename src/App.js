import React from 'react'
import styled from 'styled-components'
import LocationHeading from './components/LocationHeading'
import TotalTests from './components/TotalTests'
import InfoBlock from './components/InfoBlock'

const AppContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  & > h1 {
    margin: 0px;
  }

  & > h3 {
    margin: 0px 0px 24px 0px;
  }

  & > .row-wrapper {
    width: 280px;
    display: flex;
    justify-content: space-between;
    border: 1px dashed orange;
  }
`

function App() {
  return (
    <AppContainer>
      {/* <h3>Coming soon...</h3>
      <h1>Covid Watch v2.0</h1> */}
      <LocationHeading headingText={'Salt Lake County, Utah'} />
      <TotalTests number={'999,888,999'} numberChange={'999,888,999'} />
      
      <div className={'row-wrapper'}>
        <InfoBlock label={'Label'} number={'999,888,999'} numberChange={'999,999,000'} />
        <InfoBlock label={'Label'} number={'999,888,999'} numberChange={'999,999,000'} />
      </div>

      <div className={'row-wrapper'}>
        <InfoBlock label={'Label'} number={'999,888,999'} numberChange={'999,999,000'} />
        <InfoBlock label={'Label'} number={'999,888,999'} numberChange={'999,999,000'} />
      </div>

    </AppContainer>
  )
}

export default App;
