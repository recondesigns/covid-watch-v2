import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const DataContext = React.createContext()

export default function Data({ children }) {
    const [statesData, setStatesData] = useState(null)

    useEffect(() => {
        let apiUrl = 'https://api.covidtracking.com/v1/states/current.json'

        axios.get(apiUrl).then((res) => {
            setStatesData(() => {
                return [...res.data]
            })
        })
    }, [])

    return (
        <DataContext.Provider value={[statesData, setStatesData]}>
            { children }
        </DataContext.Provider>
    )
}