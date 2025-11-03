import Menu from './menu/menu'
import 'bulma/css/bulma.css'

const LayoutContainer = () => {
    
    return(
        <div className="app">

            <section className="main-content columns is fullheight">
                <Menu/>
                <div className="section column is-10 is-flex is-flex-direction-column">
                    <div className="card" style={{boxShadow: "0 2px 8px rgb(60, 60, 60)"}}></div>
                    <div className="car-header has-background-primary">
                        <div className="car-header-title has-text-white">
                            Cadastro de Produtos
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            Conteudo do Card
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LayoutContainer