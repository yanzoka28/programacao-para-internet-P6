"use client"

import { ProdutoResquest } from "@/app/models/request/produto/produtoRequest"
import React, { useEffect, useState } from "react"
import LayoutContainer from "../../layout/page";
import DataTableProduto from "./dataTableProduto";
import Paginacao from "./paginacao";
import { useProdutoService } from "@/app/services/produto/produtoService";
import Link from "next/link";
import { useRouter } from "next/navigation";




const ListaProduto: React.FC = () => {

    const router = useRouter();

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

            setProduto(res.data.content)
            setTotalPages(res.data.totalPages)

        })
    }

    const onEdit = (produto: ProdutoResquest) => {
        const url = `componentes/produtos/cadastro?id=${produto.id}`;
        router.push(url)
    }
    const onDelete = (produto: ProdutoResquest) => {
        console.log(produto);
        
    }


    return(

        <LayoutContainer titulo="Lista de Produtos">

            <Link href={"/componentes/produtos/cadastro"}>
            
                <button className="buttom is-info is-dark has-text-white mb-4">Castrar Produto</button>

            </Link>

            <DataTableProduto produtos={produtos} onEdit={onEdit} onDelete={onDelete}/>

            <Paginacao page={page} totalPages={totalPages} onChange={setPage}/>


        </LayoutContainer>
    )
}

export default ListaProduto