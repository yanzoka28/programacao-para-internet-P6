"use client"

import { ProdutoResquest } from "@/app/models/request/produto/produtoRequest"
import React, { useEffect, useState } from "react"
import LayoutContainer from "../../layout/page";
import DataTableProduto from "./dataTableProduto";
import Paginacao from "./paginacao";
import { useProdutoService } from "@/app/services/produto/produtoService";




const ListaProduto: React.FC = () => {

    const [produtos, setProduto] = useState([]);
    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0);
    const [pageItems, setPageItens] = useState(10);

    useEffect(() => {
        listProduto(page)
    }, 
        [page]
    )

    const produtoService = useProdutoService();

    const listProduto = (pageNumber: number) => {
        produtoService.listAll(pageNumber, pageItems).then(res => {

            setProduto(res.data)
            setTotalPages(res.data.totalPages)

        })
    }

    const onEdit = (produto: ProdutoResquest) => {
        console.log(produto);
        
    }
    const onDelete = (produto: ProdutoResquest) => {
        console.log(produto);
        
    }


    return(

        <LayoutContainer titulo="Lista de Produtos">

            <DataTableProduto produtos={produtos} onEdit={onEdit} onDelete={onDelete}/>

            <Paginacao page={page} totalPages={totalPages} onChange={setPage}/>


        </LayoutContainer>
    )
}

export default ListaProduto