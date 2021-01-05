import React, { useState } from 'react'

export const AppStateContext = React.createContext()

export default function AppState({ children }) {
    const [selectedState, setSelectedState] = useState(null)
    const [name, setName] = useState('dog')

    // [selectedState, setSelectedState]

    return (
        <AppStateContext.Provider value={{ selected: [ selectedState, setSelectedState], name: [name, setName] }}>
            { children }
        </AppStateContext.Provider>
    )
}