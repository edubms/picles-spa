import { IShelter } from "../../interfaces/shelter";
import httpClient from "../api/httpClient";

export async function getShelter(): Promise<IShelter> {
    try {
        const response = await httpClient.get('/shelter')
        return await response.data
    } catch (error) {
        console.error('Erro ao buscar o abrigo',error)
        throw Error
    }
}