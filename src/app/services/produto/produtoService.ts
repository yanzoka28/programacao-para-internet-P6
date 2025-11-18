import httpClient from "@/app/client/axiosClient";
import { ProdutoResquest } from "@/app/models/request/produto/produtoRequest";
import { AxiosResponse } from "axios";
import { promises } from "dns";

const resourceUrl: string = '/api/v1/product/'

export const useProdutoService = () => {

    async function salvarProduto(produto: ProdutoResquest): Promise<AxiosResponse>{

        const response = await httpClient.post<AxiosResponse>(`${resourceUrl}create`, produto) 

        return response;
        
    }

    async function listAll(page = 0, size:number): Promise<AxiosResponse>{

        const response = await httpClient.get<AxiosResponse>(`${resourceUrl}findAll?page=${page}&size=${size}`)

        return response   
    }

    async function findById(id = Number): Promise<AxiosResponse>{

        const response = await httpClient.get<AxiosResponse>(`${resourceUrl}${id}`)

        return response

    }

    return {
        salvarProduto,
        listAll,
        findById
        
    }
   


}