'use client'

import { useEffect, useState } from "react"
import LayoutContainer from "../../layout/page";
import 'bulma/css/bulma.css'
import { log } from "console";
import Input from "../../commons/input/input";
import { useProdutoService } from "@/app/services/produto/produtoService";
import Message from "../../commons/message/message";
import { useSearchParams } from "next/navigation";

const CadastroProduto = () => {
    const produtoService = useProdutoService();

    const [description, setDescription] = useState(""); // Array de duas posições -> Nome do atributo DAO e GET/SET
    const [price, setPrice] = useState(""); // Array de duas posições -> Nome do atributo DAO e GET/SET
    const [maker, setMaker] = useState(""); // Array de duas posições -> Nome do atributo DAO e GET/SET
    const [isActive, setisActive] = useState(true); // Array de duas posições -> Nome do atributo DAO e GET/SET

    const [tipo, setTipo] = useState("")
    const [mensagem, setMensagem] = useState("")

    const searchParams = useSearchParams();
    const id_product = searchParams.get("id");

    // useEffect(( => {
    //     if(id_product){
            
    //     }
        

    // }))

    const produto = {
        description,
        price: parseFloat(price),
        maker,
        isActive

    }

    const exibeMessage = (mensagem: any) => {
        setMensagem(mensagem)
        setTimeout(() => {setMensagem("")}, 5000)

    }

    const resetForm=()=>{
        setDescription("");
        setPrice("");
        setMaker("");
    }

    const submit = () => {
        let msg: string = "";

        produtoService.salvarProduto(produto)
        .then(res =>{
            setTipo("primary")
            msg = res.data.message;
            resetForm;
            
        })
        .catch(err => {
            setTipo("danger")
            
            msg = err.response.data.errorMessage

        })
        .finally(() => {
            exibeMessage(msg)
        })
        
    }

    return (
        <LayoutContainer titulo="Cadastro de Produtos">
            <>
            {mensagem && 
            <Message tipo={tipo} mensagem={mensagem} onClose={() => setMensagem("")}/>
            }
            

            <Input onChange={setDescription} id="inputDescricao" label="Descrição" columnClass="is-12" placeholder="Descrição do Produto"/>
            {/* <div className="field">
                <label className="label" htmlFor="inputDescricao">
                    Descrição
                </label>
                <div className="control">
                    <input className="input" type="text" placeholder="Nome do Produto" id="inputDescricao" value={description} onChange={e => setDescription(e.target.value)}/>
                </div>
            </div> */}

            <div className="columns">
                <Input onChange={setPrice} id="inputPreco" label="Preço" columnClass="is-4"/>

                {/* <div className="field  column">
                    <label className="label" htmlFor="inputPreco">
                        Preço
                    </label>
                    <div className="control">
                        <input className="input" type="text" placeholder="R$ do Produto" id="inputPreco" value={price} onChange={e => setprice(e.target.value)}/>
                    </div>
                </div> */}

                {/* <div className="field column">
                    <label className="label" htmlFor="inputFabricante">
                        Fabricante
                    </label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Nome do Fabricante" id="inputFabricante" value={maker} onChange={e => setMaker(e.target.value)}/>
                    </div>
                </div> */}

                <Input onChange={setMaker} id="inputFabricante" label="Fabricante" columnClass="is-8" placeholder="Fabricante"/>

            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button in-info is-dark has-text-white" onClick={submit}>Enviar</button>
                </div>

                <div className="control">
                    <button onClick={resetForm} className="button is-danger is-dark has-text-white is-link is-light">Cancelar</button>
                </div>
            </div>
            </>
        </LayoutContainer>
    )
}

export default CadastroProduto;