
interface paginacaoProps{
    page: number;
    totalPages: number;
    onChange: (newPage: number) => void;
}

const Paginacao : React.FC<paginacaoProps> = ({page, totalPages, onChange}) =>{

    return(
        <>
        
        <button className="button is-ligth" disabled={page == 0} onClick={(() => onChange(page - 1))}>Voltar</button>
        <samp style={{paddingTop: "10px"}}>Página {page + 1} de {totalPages}</samp>
        <button className="button is-ligth" disabled={page == +1} onClick={(() => onChange(page + 1))}>Próximo</button>

        </>
    )

}

export default Paginacao