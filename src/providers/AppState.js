import React, { useState } from 'react'

export const AppStateContext = React.createContext()

export default function AppState({ children }) {
    const [selectedState, setSelectedState] = useState('')

    return (
        <AppStateContext.Provider value={ [selectedState, setSelectedState]}>
            { children }
        </AppStateContext.Provider>
    )
}