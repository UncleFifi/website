import React, { useEffect, useState } from 'react'
import { Person } from './Components/Person'
import { WeatherActions } from './Util/WeatherApi'
import eye from './images/eye.png'
import eye2 from './images/eye2.png'
import { Loader } from './Components/Loader'

export default () => {

    // defining state in a functional component
    const [weatherCollectionData, setWeather] = useState<Array<IWeatherForecast>>([])
    const [isLoading, setIsLoading] = useState(false)

    const loadData = () => {
        setIsLoading(true)
        // Click F12 then see what the response is
        WeatherActions.getWeatherForcast().then((apiResponse) => {
            setWeather(apiResponse)
            setIsLoading(false)
        }).catch((axiosError) => {
            console.dir(axiosError)
            setIsLoading(false)
        })
    }

    // this is a react hook and this is the same as componentDidMount
    useEffect(() => 
    {
        setIsLoading(true)
        // put this here so you can see the loader...
        setTimeout(() => {
            loadData()
        }, 1500)
    },
    [])


    return <Loader isLoading={isLoading} circleColor="coral" circleSize="Large" blurrBackground={true}>
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
    </Loader>
}