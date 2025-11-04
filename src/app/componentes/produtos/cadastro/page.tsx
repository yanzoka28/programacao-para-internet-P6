'use client'

import { useState } from "react"
import LayoutContainer from "../../layout/page";
import 'bulma/css/bulma.css'
import { log } from "console";
import Input from "../../commons/input";

const CadastroProduto = () => {

    const [description, setDescription] = useState(""); // Array de duas posições -> Nome do atributo DAO e GET/SET
    const [price, setPrice] = useState(""); // Array de duas posições -> Nome do atributo DAO e GET/SET
    const [maker, setMaker] = useState(""); // Array de duas posições -> Nome do atributo DAO e GET/SET
    const [isActive, setisActive] = useState(""); // Array de duas posições -> Nome do atributo DAO e GET/SET

    const produto = {
        description,
        price,
        maker,
        isActive

    }

    const enviar = () => {
        console.log(produto);
        
    }

    return (
        <LayoutContainer titulo="Cadastro de Produtos">
            <>
            <Input onChange={setDescription} id="inputDescricao" label="Descrição" columnClass="is-12"/>
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

                <Input onChange={setMaker} id="inputFabricante" label="Fabricante" columnClass="is-8"/>

            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link" onClick={enviar}>Enviar</button>
                </div>

                <div className="control">
                    <button className="button is-link is-light">Cancelar</button>
                </div>
            </div>
            </>
        </LayoutContainer>
    )
}

export default CadastroProduto;