import { ActionsBase } from './Api'
export abstract class WeatherActions extends ActionsBase
{
    public static async getWeatherForcast(): Promise<Array<IWeatherForecast>>
    {
        const defaultReturnValue = new Array<IWeatherForecast>()
        try {
            const url = this.toUrl('WeatherForecast')
            return await this._getCall<Array<IWeatherForecast>>(url, defaultReturnValue)
        } catch (error) {
            return Promise.reject(defaultReturnValue)
        }
    }
}