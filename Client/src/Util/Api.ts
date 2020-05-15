import Axios from 'axios'
export abstract class ActionsBase
{
    protected static toUrl = (uri: string):string => `https://localhost:5001/${uri}`
    protected static async _getCall<T>(url: string, defaultValue: T): Promise<T>
    {
        try {
            const response = await Axios.get<T>(url)
            const data = response.data
            return data
        } catch (error) {
            return Promise.reject(defaultValue)
        }
    }
}