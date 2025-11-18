'use client'

import { ProdutoResquest } from "@/app/models/request/produto/produtoRequest"
import React from "react";

interface DataTableProdutoProps{
    produtos: Array<ProdutoResquest>;
    onEdit: (produto: ProdutoResquest) => void;
    onDelete: (produtoDelete: ProdutoResquest) => void;

}

const DataTableProduto: React.FC<DataTableProdutoProps> = ({produtos, onEdit, onDelete}) => {
    return(
        <>
            <table className="table is-narrow is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>
                            Descrição
                        </th>
                        <th>
                            Preço
                        </th>
                        <th>
                            Fabricante
                        </th>
                        <th style={{ textAlign: "center"}}>
                            Ações
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        
                    produtos.map(p => <ProdutoRow key={p.id} produto={p} onEdit={onEdit} onDelete={onDelete}/>)
                    
                    }
                </tbody>
            </table>
        
        </>

    )
}

export default DataTableProduto;

interface ProdutoRowProps{
    produto: ProdutoResquest;
    onEdit: (produto: ProdutoResquest) => void;
    onDelete: (produtoDelete: ProdutoResquest) => void;
}

const ProdutoRow: React.FC<ProdutoRowProps> = ({produto, onEdit, onDelete}) => {

    return(
        <tr>
            <td>
                {produto.description}
            </td>
            <td>
                {produto.price}
            </td>
            <td>
                {produto.maker}
            </td>
            <td style={{ display: "flex", justifyContent: "center"}}>
                <button onClick={e => onEdit(produto)} className="button is-link is-dark has-text-white mr-4">Editar</button>
            
                <button onClick={e => onDelete(produto)} className="button is-danger is-dark has-text-white">Deletar</button>
            </td>
        </tr>
    )


}

