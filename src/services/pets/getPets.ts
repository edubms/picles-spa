import { GetPetsRequest } from '../../interfaces/pet'
import httpClient from '../api/httpClient'

export async function getPets(
    params: GetPetsRequest
): Promise<GetPetsRequest>{
    try{
        const response = await httpClient.get('/pet', {params})

        return response.data
    }catch(error){
        console.log("Erro ao buscar pets.",error)
        throw error 
    }
}