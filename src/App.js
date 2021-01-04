import React from 'react'
import styled from 'styled-components'
import LocationHeading from './components/LocationHeading'

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
`

function App() {
  return (
    <AppContainer>
      {/* <h3>Coming soon...</h3>
      <h1>Covid Watch v2.0</h1> */}
      <LocationHeading headingText={'Salt Lake County, Utah'} />
    </AppContainer>
  )
}

export default App;
