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

    return {
        salvarProduto
    }


}