// function PrimeiroComponente(){
//     return(
//         <div>
//             <h1>Meu Primeiro Componente</h1>
//         </div>
//     );
// }

// export default PrimeiroComponente;

// const PrimeiroComponente = () => {
//     return( 
//     <h2>
//         Componente Arrow Function
//     </h2>
//     );

// }
// export default PrimeiroComponente

// const Mensagem = (props: any) => {
//         return(
//             <>
//                 {props.msg}
//             </>
//         )
// }

// const PrimeiroComponente = () => { 
//     return(
//         <div>
//             <h1>
//                 <Mensagem msg = "hello"/>
//             </h1>
//         </div>
//     )
// }

interface MensagemProps{
    msg: string;
}

const Mensagem: React.FC<MensagemProps> = (props: MensagemProps) => {

    return(
        <h1>
            {props.msg}
        </h1>
    )
}

const PrimeiroComponente = () => {
    return(
        <div>
            <h1>
                <Mensagem msg= "hello bb"/>
            </h1>
        </div>
    )
}

export default PrimeiroComponente;