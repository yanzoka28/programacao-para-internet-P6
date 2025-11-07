import { ReactNode } from 'react';
import Menu from './menu/menu'
import 'bulma/css/bulma.css'

interface LayoutProps{
    titulo?: string;
    children?: ReactNode;

}

const LayoutContainer: React.FC<LayoutProps> = (props: LayoutProps) => {
    return (
        <div className="app">
            <section className="main-content columns is fullheight">
                <Menu />
                <div className="column is-10 is-flex is-flex-direction-column">
                    <div className='section'>
                        <div className="card" style={{ boxShadow: "0 2px 8px rgb(60, 60, 60)" }}>
                            <div className="card-header has-background-primary">
                                <div className="card-header-title is-size-3 has-text-white">
                                    {props.titulo}
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                    {props.children}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LayoutContainer