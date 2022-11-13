import axios from 'axios'
import React from 'react'


const DataAsync = () => {
    const [fetchedData, setFetchedData] = React.useState([])
    const [fetchedDataError, setFetchedDataError] = React.useState("")

    const ApiData = async () => {
        try {
            const res = await axios.get("https://wordle-data.herokuapp.com/letters")
            setFetchedData(res.data)
        } catch (error: any) {
            setFetchedDataError(error)
            console.log(error.message)
        }
    }

    React.useEffect(() => {
        ApiData()
    }, [])

    return (
        <>
            {fetchedDataError !== "" && <div>{fetchedDataError}</div>}
            <div>
                {fetchedData.map((item, index) => {
                    const { key } = item
                    return <div className='keyboard' key={index}>{key}</div>
                })}
            </div>
        </>
    )
}

export default DataAsync