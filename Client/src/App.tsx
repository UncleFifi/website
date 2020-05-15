import React, { useEffect, useState } from 'react'
import { Person } from './Components/Person'
import { WeatherActions } from './Util/WeatherApi'
import eye from './images/eye.png'
import eye2 from './images/eye2.png'

export default () => {

    // defining state in a functional component
    const [weatherCollectionData, setWeather] = useState<Array<IWeatherForecast>>([])

    const loadData = () => {
        // Click F12 then see what the response is
        WeatherActions.getWeatherForcast().then((apiResponse) => {
            setWeather(apiResponse)
        }).catch((axiosError) => {
            console.dir(axiosError)
        })
    }

    // this is a react hook and this is the same as componentDidMount
    useEffect(() => 
    {
        loadData()
    },
    [])


    return <div>
        <img className="imageHeight" src={eye} alt="eye" title="EYE"/>
        <img className="imageHeight" src={eye2} alt="second eye" title="second eye"/>
        <div>
            <Person name={"Rebecca Rose Amos"}/>
            <Person name={"Arya Ann Ferreira"}/>
        </div>
        <h1>weatherCollectionData State</h1>
        <div className="button grayOhHover noselect" onClick={loadData}>
            Get New Data
        </div>
        <pre>{JSON.stringify(weatherCollectionData, null, 2)}</pre>
    </div>
}